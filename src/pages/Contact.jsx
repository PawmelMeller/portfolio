import React, { useState, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');
    const [buttonText, setButtonText] = useState('Wyślij wiadomość');

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText('Wysyłanie...');

        // REPLACE THESE SECRETS WITH YOUR EMAILJS CREDENTIALS
        // https://dashboard.emailjs.com/admin
        const SERVICE_ID = 'service_p56dkbd';
        const TEMPLATE_ID = 'template_1ohylaj';
        const PUBLIC_KEY = 'RqWQ9dRpoRl4jSkKl';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                setStatus('Dziękujemy! Wiadomość została wysłana.');
                setButtonText('Wyślij wiadomość');
                form.current.reset();
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                setStatus('Wystąpił błąd. Spróbuj ponownie lub napisz na maila.');
                setButtonText('Wyślij wiadomość');
                console.error(error.text);
            });
    }

    return (
        <div data-scroll-section className="pt-[15vh] px-[4vw] min-h-screen">
            <Helmet>
                <title>Kontakt | Meller Web - Projektowanie Stron</title>
                <meta name="description" content="Skontaktuj się z nami! Odpowiadamy w 24h. Darmowa wycena strony internetowej lub sklepu. Twój partner w biznesie online." />
            </Helmet>

            <div className="mb-[8vw] sm:flex justify-between items-end">
                <h1 className="text-[10vw] leading-[10vw] tracking-tighter sm:text-[6vw] sm:leading-[6.5vw] uppercase font-[PlinaReg]">
                    Kontakt
                </h1>
                <div className="text-right hidden sm:block font-[PlinaReg]">
                    <p>Meller Web</p>
                    <p>ul. Kaszubska 7</p>
                    <p>81-813 Sopot</p>
                    <p className="mt-2 text-xl underline"><a href="mailto:pawel.meller3@gmail.com">pawel.meller3@gmail.com</a></p>
                </div>
            </div>

            <div className="sm:flex gap-[10vw] pb-[10vw]">
                <div className="sm:w-1/2 mb-[10vw] sm:mb-0">
                    <form ref={form} onSubmit={handleSubmit} className="space-y-8 font-[PlinaReg]">
                        <div className="border-b border-white pb-2">
                            <label className="block text-sm text-gray-400 mb-2 uppercase">Imię i Nazwisko</label>
                            <input name="name" type="text" className="w-full bg-transparent outline-none text-2xl py-2 focus:text-[#3f7df4] transition-colors" placeholder="Jan Kowalski" required />
                        </div>
                        <div className="border-b border-white pb-2">
                            <label className="block text-sm text-gray-400 mb-2 uppercase">Email</label>
                            <input name="email" type="email" className="w-full bg-transparent outline-none text-2xl py-2 focus:text-[#3f7df4] transition-colors" placeholder="jan@example.com" required />
                        </div>
                        <div className="border-b border-white pb-2">
                            <label className="block text-sm text-gray-400 mb-2 uppercase">Wiadomość</label>
                            <textarea name="message" className="w-full bg-transparent outline-none text-2xl py-2 h-32 resize-none focus:text-[#3f7df4] transition-colors" placeholder="O czym chcesz porozmawiać?" required></textarea>
                        </div>

                        <button type="submit" className="border border-white rounded-full px-8 py-4 text-xl hover:bg-white hover:text-black transition-colors uppercase">
                            {buttonText}
                        </button>
                        {status && <p className="text-green-400 mt-4">{status}</p>}
                    </form>
                </div>
                <div className="sm:w-1/2 h-[50vh] bg-gray-800 relative group overflow-hidden">
                    {/* Google Map Embed */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#222]">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2319.297464053916!2d18.55598697728731!3d54.43777897262534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd0a7995167b29%3A0xc07ce97453d07747!2sKaszubska%207%2C%2081-813%20Sopot!5e0!3m2!1spl!2spl!4v1705420000000!5m2!1spl!2spl" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
