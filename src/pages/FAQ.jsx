import React from 'react'
import { Helmet } from 'react-helmet-async'

const FAQ = () => {
    const faqs = [
        { q: "Ile kosztuje strona internetowa?", a: "Koszt zależy od skomplikowania projektu. Proste strony wizytówki zaczynają się od 1500 zł, a sklepy od 5000 zł." },
        { q: "Jak długo trwa realizacja?", a: "Standardowy czas to 2-4 tygodnie dla strony www i 4-8 tygodni dla sklepu internetowego." },
        { q: "Czy wystawiasz fakturę VAT?", a: "Tak, oczywiście. Na wszystkie usługi wystawiamy fakturę VAT 23%." },
        { q: "Czy strona będzie widoczna w Google?", a: "Tak, każda nasza strona jest wstępnie zoptymalizowana pod SEO (szybkość, struktura, meta tagi)." },
        { q: "Czy mogę samodzielnie edytować treść?", a: "Tak, wdrażamy systemy CMS (np. WordPress), które pozwalają na łatwą edycję tekstów i zdjęć." },
        { q: "Co jest potrzebne do rozpoczęcia prac?", a: "Potrzebujemy briefu (opisu oczekiwań), logotypu, tekstów oraz zdjęć (jeśli posiadasz)." },
        { q: "Czy oferujecie wsparcie po wdrożeniu?", a: "Tak, oferujemy pakiety opieki technicznej oraz gwarancję na wykonane prace." },
        { q: "Czy mogę mieć sklep z płatnościami online?", a: "Tak, integrujemy bezpieczne płatności (BLIK, Przelewy24, Stripe, PayU), aby Twoi klienci mogli kupować szybko i wygodnie." },
        { q: "Jak wygląda płatność?", a: "Zazwyczaj rozliczamy się w modelu: zaliczka na start, reszta po akceptacji gotowego projektu." }
    ]

    return (
        <div data-scroll-section className="pt-[15vh] px-[4vw] min-h-screen">
            <Helmet>
                <title>FAQ | Najczęściej zadawane pytania - Craze Studio</title>
                <meta name="description" content="Masz pytania? Sprawdź odpowiedzi na najczęstsze pytania dotyczące tworzenia stron, sklepów i aplikacji. FAQ Craze Studio." />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(item => ({
                            "@type": "Question",
                            "name": item.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": item.a
                            }
                        }))
                    })}
                </script>
            </Helmet>

            <div className="mb-[8vw]">
                <h1 className="text-[10vw] leading-[10vw] tracking-tighter sm:text-[6vw] sm:leading-[6.5vw] uppercase font-[PlinaReg]">
                    FAQ
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[4vw] pb-[10vw]">
                {faqs.map((item, index) => (
                    <div key={index} className="mb-8">
                        <h3 className="text-xl font-[silkSerif] mb-2 text-white">{item.q}</h3>
                        <p className="font-[PlinaReg] text-gray-400">{item.a}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ
