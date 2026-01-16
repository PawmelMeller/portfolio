export const blogPosts = [
    {
        slug: "wlasny-sklep-vs-allegro",
        title: "Czy warto mieć własny sklep zamiast Allegro? Plusy i minusy",
        excerpt: "Allegro to gigant, ale czy budujesz tam swoją markę? Zobacz, dlaczego własny sklep internetowy to inwestycja w niezależność.",
        date: "20.01.2024",
        tag: "E-commerce",
        content: `
            <h2>Allegro – łatwy start, ale...</h2>
            <p>Sprzedaż na Allegro jest prosta, ale wiąże się z wysokimi prowizjami i walką cenową. Klienci kupują "na Allegro", a nie "u Ciebie". Tworzenie stron internetowych dla firm i sklepów to nasza specjalność, więc widzimy, jak marki rozkwitają po przejściu na swoje.</p>

            <h2>Dedykowany sklep internetowy – Twoje zasady</h2>
            <p>Własny sklep to pełna kontrola nad bazą klientów, marketingiem i marżą. Nie boisz się, że platforma z dnia na dzień zmieni regulamin.</p>

            <h2>Koszty długoterminowe</h2>
            <p>Prowizje Allegro potrafią zjeść dużą część zysku. Własny sklep to koszt jednorazowy (stworzenie) + niewielki abonament za serwer. Przy dużej sprzedaży, oszczędności są ogromne.</p>

            <div class="cta-box">
                <h3>Chcesz uniezależnić się od Allegro?</h3>
                <p>Zbudujemy dla Ciebie profesjonalny sklep. Sprawdź ile kosztuje sklep internetowy w naszej ofercie.</p>
            </div>
        `
    },
    {
        slug: "koszt-stworzenia-strony-internetowej",
        title: "Ile kosztuje strona internetowa? Cennik 2026 i elementy składowe",
        excerpt: "Od prostych wizytówek po zaawansowane serwisy. Co wpływa na cenę i dlaczego warto zainwestować w jakość?",
        date: "18.01.2024",
        tag: "Cennik",
        content: `
            <h2>Co składa się na cenę strony?</h2>
            <p>Wiele osób pyta "ile kosztuje strona internetowa?". To zależy od technologii, designu i funkcji. Profesjonalne tworzenie stron internetowych dla firm to proces, a nie gotowy produkt z półki.</p>

            <h2>Widełki cenowe 2026</h2>
            <ul>
                <li><strong>Strona Wizytówka (One Page):</strong> 1500 - 3000 zł. Idealna dla małych firm.</li>
                <li><strong>Strona z CMS (Wielostronicowa):</strong> 3000 - 8000 zł. Dla firm potrzebujących bloga i oferty.</li>
                <li><strong>Aplikacja webowa na zamówienie:</strong> 10 000 zł +. Indywidualne rozwiązania i systemy.</li>
            </ul>

            <h2>Tanie strony vs Profesjonalne</h2>
            <p>Tania strona często oznacza brak optymalizacji SEO, wolne ładowanie i problemy z bezpieczeństwem. Inwestując w jakość, inwestujesz w klienta, który zostanie na dłużej.</p>
 
            <div class="cta-box">
                <h3>Chcesz konkretną wycenę?</h3>
                <p>Napisz do nas, wycenimy Twój projekt w 24h.</p>
            </div>
        `
    },
    {
        slug: "strona-internetowa-react-krok-po-kroku",
        title: "Jak stworzyć stronę internetową od zera w React? [Poradnik krok po kroku]",
        excerpt: "Praktyczny przewodnik tworzenia nowoczesnej strony w React. Od konfiguracji po wdrożenie i SEO. Dowiedz się, jak to zrobić dobrze.",
        date: "16.01.2024",
        tag: "Poradniki",
        content: `
            <h2>Wstęp</h2>
            <p>Stworzenie własnej strony internetowej w React to świetny sposób na naukę nowoczesnych technologii webowych oraz budowę wydajnego, dynamicznego serwisu. W tym poradniku przejdziemy przez cały proces – od „Hello World” aż po deployment.</p>

            <h2>1. Konfiguracja środowiska</h2>
            <p>Pierwszym krokiem jest instalacja Node.js. Następnie stworzymy nowy projekt. Choć polecenie <code>create-react-app</code> było standardem przez lata, w 2026 roku zalecamy korzystanie z Vite:</p>
            <pre><code>npm create vite@latest my-react-app -- --template react</code></pre>
            <p>Vite jest znacznie szybszy i nowocześniejszy. Po instalacji uruchom projekt poleceniem <code>npm run dev</code>.</p>

            <h2>2. Struktura komponentów</h2>
            <p>React opiera się na komponentach. Podziel swoją stronę na logiczne części: Nagłówek, Sekcja Główna, O mnie, Kontakt, Stopka. Komponenty pozwalają na wielokrotne wykorzystanie kodu i łatwiejsze zarządzanie projektem.</p>

            <h2>3. Stylowanie</h2>
            <p>Możesz użyć czystego CSS, modułów CSS lub nowoczesnych frameworków jak Tailwind CSS. Tailwind pozwala na błyskawiczne stylowanie bezpośrednio w klasach JSX, co przyspiesza development.</p>

            <h2>4. React a SEO - ważne uwagi</h2>
            <p>Czysty React renderowany jest po stronie klienta (CSR). Google radzi sobie z tym coraz lepiej, ale dla pewności i najlepszej wydajności warto rozważyć Next.js (który omówimy w innym artykule) lub zadbać o pre-rendering.</p>

            <h2>5. Wdrożenie (Deployment)</h2>
            <p>Najłatwiej wdrożyć aplikację React na platformach takich jak Vercel czy Netlify. Wystarczy połączyć repozytorium GitHub, a proces budowania i publikacji dzieje się automatycznie.</p>

            <h2>FAQ</h2>
            <h3>Czy React jest trudny dla początkujących?</h3>
            <p>Wymaga znajomości JavaScript (ES6+), ale jego logika jest bardzo przejrzysta po opanowaniu podstaw.</p>
            <h3>Czy strona w React jest darmowa?</h3>
            <p>Tak, same narzędzia są darmowe. Płacisz jedynie za domenę i ewentualnie hosting (choć Vercel ma darmowy plan).</p>

            <div class="cta-box">
                <h3>Potrzebujesz profesjonalnej strony?</h3>
                <p>Jeśli wolisz oddać to w ręce ekspertów, skontaktuj się z nami. Stworzymy dla Ciebie wydajną stronę w React/Next.js.</p>
                <a href="/kontakt">Skontaktuj się z nami</a>
            </div>
        `
    },
    {
        slug: "nextjs-od-podstaw-przewodnik",
        title: "Jak zbudować stronę WWW w Next.js od podstaw – kompletny przewodnik",
        excerpt: "Różnice między React a Next.js, SSR, SSG i routing. Kompletny tutorial dla chcących wejść w Next.js.",
        date: "14.01.2024",
        tag: "Next.js",
        content: `
            <h2>Dlaczego Next.js?</h2>
            <p>Next.js to framework zbudowany na React, który rozwiązuje wiele problemów „czystego” Reacta, takich jak routing czy renderowanie po stronie serwera (SSR). To obecnie standard w tworzeniu profesjonalnych aplikacji webowych.</p>

            <h2>Kluczowe różnice: React vs Next.js</h2>
            <ul>
                <li><strong>Rendering:</strong> Next.js oferuje SSR (Server Side Rendering) i SSG (Static Site Generation), co jest kluczowe dla SEO.</li>
                <li><strong>Routing:</strong> W Next.js routing oparty jest na strukturze plików w folderze <code>pages</code> lub <code>app</code> (App Router).</li>
                <li><strong>Backend:</strong> Next.js posiada API Routes, co pozwala na tworzenie backendu w tym samym projekcie.</li>
            </ul>

            <h2>Tworzenie projektu</h2>
            <p>Aby zacząć, wpisz w terminalu:</p>
            <pre><code>npx create-next-app@latest</code></pre>
            <p>Kreator zapyta Cię o TypeScript, ESLint i Tailwind CSS – zalecamy włączenie wszystkich tych opcji dla nowoczesnego stacku.</p>

            <h2>SEO w Next.js</h2>
            <p>Dzięki komponentowi <code>Metadata</code> (w App Router) lub <code>Head</code> (w Pages Router), zarządzanie tytułami i opisami meta jest trywialne. Co więcej, dzięki SSR, Google otrzymuje gotowy HTML, co gwarantuje błyskawiczną indeksację.</p>

            <div class="cta-box">
                <h3>Chcesz szybką stronę w Next.js?</h3>
                <p>Specjalizujemy się w Next.js. Napisz do nas, a zbudujemy Twój projekt.</p>
            </div>
        `
    },
    {
        slug: "mvp-startup-nextjs",
        title: "Tworzenie aplikacji webowej w Next.js – jak zrealizować MVP dla startupu?",
        excerpt: "Szybki time-to-market dzięki Next.js. Dlaczego warto wybrać tę technologię do budowy MVP Twojego startupu?",
        date: "10.01.2024",
        tag: "Biznes",
        content: `
            <h2>Co to jest MVP?</h2>
            <p>MVP (Minimum Viable Product) to wersja produktu z minimalną liczbą funkcji, wystarczającą do wejścia na rynek i zebrania feedbacku. W świecie startupów czas to pieniądz.</p>

            <h2>Dlaczego Next.js dla MVP?</h2>
            <p>Next.js pozwala na niesamowicie szybki development. Nie musisz konfigurować routera, webpacka czy środowiska. Masz gotowe rozwiązania dla autoryzacji (NextAuth), baz danych (Prisma) i stylowania.</p>
            <p>Hostowanie na Vercel (twórcy Next.js) pozwala na deploy w sekundy, co idealnie sprawdza się w dynamicznym środowisku startupowym.</p>

            <h2>Koszt i czas</h2>
            <p>Budowa MVP w Next.js może być o 30-40% szybsza niż w starszych technologiach. Pozwala to zaoszczędzić budżet na marketing i rozwój produktu.</p>

            <h3>FAQ</h3>
            <p><strong>Czy Next.js jest skalowalny?</strong> Tak, korzystają z niego giganci jak Netflix czy Uber. Twoje MVP bez problemu urośnie do pełnego produktu.</p>

            <div class="cta-box">
                <h3>Zbudujemy Twój MVP</h3>
                <p>Masz pomysł? My mamy technologię. Skontaktuj się w sprawie wyceny.</p>
                <a href="/kontakt">Darmowa wycena</a>
            </div>
        `
    },
    {
        slug: "system-rezerwacji-online-nextjs",
        title: "Dedykowany system rezerwacji online w Next.js – czy warto zamiast gotowego rozwiązania?",
        excerpt: "Gotowy SaaS czy własny system? Analiza korzyści dedykowanego systemu rezerwacji bez prowizji i abonamentów.",
        date: "08.01.2024",
        tag: "E-commerce",
        content: `
            <h2>Problem z gotowymi systemami (SaaS)</h2>
            <p>Gotowe systemy rezerwacji (np. Booksy, Calendly) są świetne na start, ale mają wady: wysokie prowizje, miesięczne abonamenty i ograniczoną możliwość personalizacji. Nie jesteś właścicielem swoich danych.</p>

            <h2>Zalety dedykowanego systemu w Next.js</h2>
            <ul>
                <li><strong>Brak prowizji:</strong> Cały przychód zostaje u Ciebie.</li>
                <li><strong>Pełna kontrola:</strong> Dostosowujesz kalendarz dokładnie do specyfiki Twoich usług.</li>
                <li><strong>Integracje:</strong> Możesz połączyć system z własnym CRM, ERP czy nietypowymi bramkami płatności.</li>
            </ul>

            <h2>Case Study</h2>
            <p>Dla klienta z branży beauty wdrożyliśmy system, który zautomatyzował 90% zapisów, eliminując potrzebę recepcjonistki. Inwestycja zwróciła się w 4 miesiące dzięki oszczędnościom na prowizjach.</p>

            <div class="cta-box">
                <h3>Chcesz własny system rezerwacji?</h3>
                <p>Porozmawiajmy o dedykowanym rozwiązaniu dla Twojej firmy.</p>
            </div>
        `
    },
    {
        slug: "crm-nextjs-dedykowany",
        title: "Tworzenie dedykowanego CRM w Next.js – kiedy warto postawić na własne rozwiązanie?",
        excerpt: "Salesforce to nie jedyna opcja. Kiedy Twoja firma potrzebuje dedykowanego CRM szytego na miarę w Next.js?",
        date: "05.01.2024",
        tag: "Biznes",
        content: `
            <h2>CRM Szyty na miarę</h2>
            <p>Uniwersalne systemy CRM są jak garnitury z sieciówki – pasują na każdego, ale na nikogo idealnie. Dedykowany CRM w Next.js to garnitur szyty u krawca.</p>

            <h2>Kiedy warto?</h2>
            <p>Warto zainwestować, gdy:</p>
            <ul>
                <li>Twoje procesy sprzedażowe są nietypowe.</li>
                <li>Potrzebujesz specyficznych raportów, których nie ma w gotowcach.</li>
                <li>Chcesz uniknąć rosnących opłat licencyjnych za każdego użytkownika.</li>
            </ul>

            <h2>Bezpieczeństwo</h2>
            <p>Next.js pozwala na pełną kontrolę nad danymi. Nie trzymasz bazy klientów w chmurze giganta, ale na własnych, zabezpieczonych serwerach.</p>

            <div class="cta-box">
                <h3>Potrzebujesz wyceny CRM?</h3>
                <p>Napisz do nas. Przeanalizujemy Twoje potrzeby.</p>
            </div>
        `
    },
    {
        slug: "wordpress-vs-nextjs-wybor",
        title: "WordPress vs Next.js – którą platformę wybrać do strony firmowej?",
        excerpt: "Wielkie porównanie technologii 2026. Szybkość, bezpieczeństwo, koszty. Co będzie lepszą inwestycją?",
        date: "03.01.2024",
        tag: "Porównania",
        content: `
            <h2>Odwieczne pytanie: WP czy Code?</h2>
            <p>WordPress obsługuje dużą część internetu, ale Next.js zdobywa rynek nowoczesnych stron biznesowych.</p>

            <h2>Porównanie</h2>
            <table>
                <tr>
                    <th>Cecha</th>
                    <th>WordPress</th>
                    <th>Next.js</th>
                </tr>
                <tr>
                    <td>Szybkość</td>
                    <td>Średnia (zależna od wtyczek)</td>
                    <td>Bardzo wysoka (statyczny HTML)</td>
                </tr>
                <tr>
                    <td>Bezpieczeństwo</td>
                    <td>Podatny na ataki (wtyczki)</td>
                    <td>Wysokie (brak bazy SQL na froncie)</td>
                </tr>
                <tr>
                    <td>Koszt startu</td>
                    <td>Niski</td>
                    <td>Średni/Wyższy</td>
                </tr>
            </table>

            <h2>Werdykt</h2>
            <p>Jeśli masz budżet 2000 zł i potrzebujesz strony "na wczoraj", wybierz WordPress. Jeśli budujesz markę premium, zależy Ci na SEO i bezpieczeństwie na lata – wybierz Next.js.</p>

            <div class="cta-box">
                <h3>Myślisz o przesiadce na Next.js?</h3>
                <p>Skontaktuj się z nami.</p>
            </div>
        `
    },
    {
        slug: "wordpress-czy-dedykowana-strona",
        title: "WordPress czy dedykowana strona internetowa dla firmy? Którą opcję wybrać?",
        excerpt: "Plusy i minusy szablonów vs rozwiązania custom. Co się bardziej opłaca w dłuższej perspektywie?",
        date: "29.12.2023",
        tag: "Porównania",
        content: `
            <h2>Masówka czy unikat?</h2>
            <p>WordPress z gotowym szablonem to szybkie rozwiązanie, ale Twoja strona może wyglądać jak tysiące innych. Dedykowana strona to unikalny design i kod napisany specjalnie dla Ciebie.</p>

            <h2>Kwestia bezpieczeństwa</h2>
            <p>WordPress jest celem numer 1 dla hakerów. Brak aktualizacji jednej wtyczki może położyć całą firmową stronę. Strony dedykowane (np. statyczne) są niemal nie do złamania w tradycyjny sposób.</p>

            <h2>Rekomendacja</h2>
            <p>Dla małej kawiarni WordPress jest OK. Dla firmy technologicznej, kancelarii czy producenta – dedykowana strona buduje zaufanie i profesjonalny wizerunek.</p>

            <div class="cta-box">
                <h3>Zamów dedykowaną stronę</h3>
                <p>Sprawdź naszą ofertę rozwiązań custom.</p>
            </div>
        `
    },
    {
        slug: "wady-wordpressa-5-powodow",
        title: "Wady WordPressa – 5 powodów, by rozważyć dedykowaną stronę internetową",
        excerpt: "Dlaczego WordPress może nie być najlepszym wyborem? Problemy z wydajnością, bezpieczeństwem i „spaghetti code”.",
        date: "27.12.2023",
        tag: "Technologia",
        content: `
            <h2>1. Wydajność</h2>
            <p>WordPress ładuje masę zbędnego kodu. Nawet prosta strona może ważyć megabajty przez nieoptymalne motywy.</p>

            <h2>2. Bezpieczeństwo</h2>
            <p>Popularność to przekleństwo. Boty non-stop skanują strony WP szukając luk.</p>

            <h2>3. Konflikty wtyczek</h2>
            <p>Aktualizacja jednej wtyczki może wysypać inną. "White screen of death" to codzienność administratorów WP.</p>

            <h2>4. Koszty utrzymania</h2>
            <p>Tani start, drogie utrzymanie. Naprawa błędów, czyszczenie po wirusach, płatne wtyczki – to się sumuje.</p>

            <h2>5. Ograniczenia designu</h2>
            <p>Walka z szablonem, żeby wyglądał "troszkę inaczej", zajmuje więcej czasu niż napisanie tego od zera w kodzie.</p>

            <div class="cta-box">
                <h3>Uniknij tych problemów</h3>
                <p>Wybierz bezpieczną i szybką stronę w Next.js.</p>
            </div>
        `
    },
    {
        slug: "alternatywy-dla-wordpressa",
        title: "Alternatywy dla WordPressa – jak stworzyć stronę bez popularnego CMS?",
        excerpt: "Świat nie kończy się na WP. Poznaj Wix, Webflow, Strapi i rozwiązania Headless + React.",
        date: "20.12.2023",
        tag: "Technologia",
        content: `
            <h2>Co zamiast WordPressa?</h2>
            <p>Rynek CMS ewoluował. Mamy teraz:</p>
            <ul>
                <li><strong>No-Code (Wix, Webflow):</strong> Dobre dla wizualwców, ale zamykają w swoim ekosystemie.</li>
                <li><strong>Headless CMS (Strapi, Contentful):</strong> Zarządzasz treścią w panelu, a stronę wyświetla nowoczesny frontend (np. Next.js). To przyszłość.</li>
            </ul>

            <h2>Dlaczego Headless + React?</h2>
            <p>To połączenie wygody edycji treści (jak w WP) z niesamowitą wydajnością i swobodą programowania frontendu. Idealne dla ambitnych projektów.</p>

            <div class="cta-box">
                <h3>Pomożemy wybrać technologię</h3>
                <p>Poradzimy, co będzie najlepsze dla Twojego biznesu.</p>
            </div>
        `
    },
    {
        slug: "seo-react-nextjs",
        title: "Jak zadbać o SEO strony internetowej stworzonej w React/Next.js?",
        excerpt: "Server Side Rendering, meta tagi i mapa strony. Techniczne SEO w nowoczesnych frameworkach.",
        date: "10.12.2023",
        tag: "SEO",
        content: `
            <h2>Mit: Google nie widzi Reacta</h2>
            <p>To już przeszłość, ale nadal czysty CSR (Client Side Rendering) bywa ryzykowny. Rozwiązaniem jest Next.js.</p>

            <h2>Kluczowe działania SEO w Next.js:</h2>
            <ol>
                <li><strong>SSR/SSG:</strong> Renderuj treści na serwerze. Google dostaje gotowy tekst od razu.</li>
                <li><strong>Meta Tagi:</strong> Używaj <code>next/head</code> lub Metadata API, aby każda podstrona miała unikalny tytuł i opis.</li>
                <li><strong>Sitemap.xml:</strong> Wygeneruj mapę strony automatycznie.</li>
                <li><strong>Semantyczny HTML:</strong> Pamiętaj o nagłówkach H1, H2, znacznikach alt – framework nie zwalnia z podstaw kodu.</li>
            </ol>

            <div class="cta-box">
                <h3>Potrzebujesz audytu SEO?</h3>
                <p>Sprawdzimy Twoją aplikację React pod kątem widoczności w Google.</p>
            </div>
        `
    },
    {
        slug: "aplikacja-webowa-vs-gotowe",
        title: "Dedykowana aplikacja webowa dla firmy vs gotowe oprogramowanie – co się bardziej opłaca?",
        excerpt: "Inwestycja we własność intelektualną czy wynajem licencji? Analiza biznesowa.",
        date: "05.12.2023",
        tag: "Biznes",
        content: `
            <h2>Własność vs Wynajem</h2>
            <p>Kupując gotowe oprogramowanie (SaaS), wynajmujesz je. Gdy przestaniesz płacić, tracisz dostęp. Budując własną aplikację, budujesz kapitał firmy.</p>

            <h2>Dopasowanie</h2>
            <p>Gotowe oprogramowanie wymusza zmianę twoich procesów pod system. Dedykowana aplikacja dopasowuje się do Twoich procesów. To kluczowa różnica w efektywności pracy.</p>

            <div class="cta-box">
                <h3>Skonsultuj projekt aplikacji</h3>
                <p>Sprawdź, czy dedykowane rozwiązanie się opłaca.</p>
            </div>
        `
    },
    {
        slug: "sklep-woocommerce-vs-nextjs",
        title: "Sklep internetowy na WooCommerce czy dedykowany (React/Next.js)? Które rozwiązanie wybrać?",
        excerpt: "E-commerce w 2026. Kiedy „Woo” przestaje wystarczać i warto przejść na Headless?",
        date: "01.12.2023",
        tag: "E-commerce",
        content: `
            <h2>WooCommerce - król małych sklepów</h2>
            <p>Świetny na start. Tani, prosty. Ale przy 10 000 produktów i dużym ruchu zaczyna „mulić”.</p>

            <h2>Next.js Commerce</h2>
            <p>Dedykowany frontend sklepu ładuje się ułamki sekundy. Przechodzenie między produktami jest natychmiastowe. To bezpośrednio przekłada się na wyższą konwersję i sprzedaż.</p>

            <h2>Headless eCommerce</h2>
            <p>Możesz używać backendu Shopify lub Magento, a frontend napisać w Next.js. To najlepsze z obu światów.</p>

            <div class="cta-box">
                <h3>Twój sklep potrzebuje przyspieszenia?</h3>
                <p>Porozmawiajmy o migracji na Next.js.</p>
            </div>
        `
    },
    {
        slug: "technologia-strony-2026",
        title: "Jaką technologię wybrać do stworzenia strony internetowej w 2026? [WordPress, Next.js, czy coś innego]",
        excerpt: "Przegląd trendów. Jamstack, No-Code, AI. W co inwestować budżet?",
        date: "28.11.2023",
        tag: "Technologia",
        content: `
            <h2>Krajobraz 2026</h2>
            <p>W 2026 roku liczy się Core Web Vitals i User Experience. Strony wolne odpadają z gry.</p>

            <h2>Ranking rozwiązań:</h2>
            <ul>
                <li><strong>Next.js / React:</strong> Lider wydajności i elastyczności.</li>
                <li><strong>Astro:</strong> Wschodząca gwiazda dla stron statycznych.</li>
                <li><strong>WordPress:</strong> Nadal popularny, ale technologicznie zostaje w tyle bez mocnej optymalizacji.</li>
            </ul>

            <div class="cta-box">
                <h3>Nie wiesz co wybrać?</h3>
                <p>Doradzimy technologicznie bez żargonu.</p>
            </div>
        `
    },
    {
        slug: "strona-od-podstaw-vs-kreator",
        title: "Tworzenie strony internetowej od podstaw vs kreator stron (WordPress, Wix) – co lepsze dla biznesu?",
        excerpt: "DIY czy Pro? Czy warto oszczędzać na wizerunku firmy w internecie?",
        date: "25.11.2023",
        tag: "Porady",
        content: `
            <h2>Pułapka „Zrób to sam”</h2>
            <p>Kreatory obiecują stronę w godzinę. Efekt? Strony, które wyglądają identycznie, nie pozycjonują się i są własnością platformy, a nie Twoją.</p>

            <h2>Profesjonalny wizerunek</h2>
            <p>Strona od podstaw to sygnał dla klienta: „Jesteśmy profesjonalistami, dbamy o jakość”. To inwestycja, która zwraca się w zaufaniu klientów.</p>

            <div class="cta-box">
                <h3>Postaw na jakość</h3>
                <p>Zamów stronę, która wyróżni Cię z tłumu.</p>
            </div>
        `
    }
];
