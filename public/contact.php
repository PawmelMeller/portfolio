<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

// Configuration
$smtp_host = 'serwer2665706.home.pl';
$smtp_port = 465;
$smtp_user = 'kontakt@craze-studio.pl';
$smtp_pass = 'jk57@dfZ';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    $name = strip_tags(trim($data["name"] ?? ''));
    $email = filter_var(trim($data["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $message = trim($data["message"] ?? '');

    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Please complete the form and try again."]);
        exit;
    }

    $recipient = "pawel.meller3@gmail.com";
    $subject = "Nowa wiadomosc ze strony od: $name";

    // HTML Email Template
    $body = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Nowa wiadomość</title>
    </head>
    <body style="background-color: #151515; color: #ffffff; font-family: Arial, sans-serif; margin: 0; padding: 40px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; padding: 40px; border-radius: 4px; border: 1px solid #333;">
            <div style="margin-bottom: 30px; border-bottom: 1px solid #333; padding-bottom: 20px;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">Craze Studio</h1>
            </div>
            
            <table style="width: 100%; margin-bottom: 20px;">
                <tr>
                    <td style="padding-bottom: 5px; color: #888; font-size: 11px; text-transform: uppercase;">Imię i Nazwisko</td>
                </tr>
                <tr>
                    <td style="padding-bottom: 20px; color: #fff; font-size: 16px;">' . htmlspecialchars($name) . '</td>
                </tr>
                <tr>
                    <td style="padding-bottom: 5px; color: #888; font-size: 11px; text-transform: uppercase;">Email</td>
                </tr>
                <tr>
                    <td style="padding-bottom: 20px; color: #fff; font-size: 16px;">
                        <a href="mailto:' . htmlspecialchars($email) . '" style="color: #fff; text-decoration: none;">' . htmlspecialchars($email) . '</a>
                    </td>
                </tr>
                <tr>
                    <td style="padding-bottom: 5px; color: #888; font-size: 11px; text-transform: uppercase;">Wiadomość</td>
                </tr>
                <tr>
                    <td style="color: #fff; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">' . nl2br(htmlspecialchars($message)) . '</td>
                </tr>
            </table>
            
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #333; text-align: center; color: #444; font-size: 12px;">
                Wiadomość wysłana z formularza kontaktowego craze-studio.pl
            </div>
        </div>
    </body>
    </html>
    ';

    if (send_smtp_mail($recipient, $subject, $body, $email, $smtp_host, $smtp_port, $smtp_user, $smtp_pass)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Dziękujemy! Wiadomość została wysłana."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Wystąpił błąd podczas wysyłania (SMTP)."]);
    }
} else {
    http_response_code(403);
    echo "Access Forbidden";
}

function send_smtp_mail($to, $subject, $body, $replyTo, $host, $port, $username, $password) {
    $timeout = 10;
    $socket = fsockopen("ssl://" . $host, $port, $errno, $errstr, $timeout);

    if (!$socket) {
        error_log("SMTP Connect Error: $errstr ($errno)");
        return false;
    }

    // Helper to read server response
    function read_response($socket) {
        $response = "";
        while ($line = fgets($socket, 515)) {
            $response .= $line;
            if (substr($line, 3, 1) == " ") break;
        }
        return $response;
    }
    
    // Initial hello
    read_response($socket);

    fputs($socket, "EHLO " . $_SERVER['SERVER_NAME'] . "\r\n");
    read_response($socket);

    fputs($socket, "AUTH LOGIN\r\n");
    read_response($socket);

    fputs($socket, base64_encode($username) . "\r\n");
    read_response($socket);

    fputs($socket, base64_encode($password) . "\r\n");
    read_response($socket);

    fputs($socket, "MAIL FROM: <$username>\r\n");
    read_response($socket);

    fputs($socket, "RCPT TO: <$to>\r\n");
    read_response($socket);

    fputs($socket, "DATA\r\n");
    read_response($socket);

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "Date: " . date('r') . "\r\n";
    $headers .= "From: $username\r\n";
    $headers .= "Reply-To: $replyTo\r\n";
    $headers .= "To: $to\r\n";
    $headers .= "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=\r\n";

    fputs($socket, "$headers\r\n$body\r\n.\r\n");
    $result = read_response($socket);

    fputs($socket, "QUIT\r\n");
    fclose($socket);

    // Check if message queued successfully (250)
    if (strpos($result, '250') !== false) {
        return true;
    } else {
        error_log("SMTP Send Error: $result");
        return false;
    }
}
?>
