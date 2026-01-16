import React from 'react'
import { Helmet } from 'react-helmet-async'

const Pricing = () => {
    const packages = [
        {
            name: "OnePage",
            price: "od 1500 zł",
            features: ["Strona wizytówka", "Sekcja O firmie, Oferta, Kontakt", "Responsywność (RWD)", "Optymalizacja podstawowa"]
        },
        {
            name: "Standard",
            price: "od 3000 zł",
            features: ["Do 5 podstron", "System CMS (WordPress)", "Blog / Aktualności", "Formularz kontaktowy", "Optymalizacja SEO"]
        },
        {
            name: "Sklep",
            price: "od 5000 zł",
            features: ["WooCommerce / PrestaShop", "Integracja płatności", "Do 50 produktów na start", "Panel klienta", "Szkolenie z obsługi"]
        },
        {
            name: "Aplikacja",
            price: "Wycena",
            features: ["Dedykowane rozwiązania", "React / Node.js", "Bazy danych", "API", "Skalowalna architektura"]
        }
    ]

    return (
        <div data-scroll-section className="pt-[15vh] px-[4vw] min-h-screen">
            <Helmet>
                <title>Cennik Stron WWW i Sklepów | Oferta WebDev</title>
                <meta name="description" content="Sprawdź nasze ceny. Transparentny cennik stron internetowych, sklepów online i aplikacji. Wybierz pakiet idealny dla Twojego biznesu." />
            </Helmet>

            <div className="mb-[8vw]">
                <h1 className="text-[10vw] leading-[10vw] tracking-tighter sm:text-[6vw] sm:leading-[6.5vw] uppercase font-[PlinaReg]">
                    Cennik
                </h1>
                <p className="mt-[4vw] sm:mt-[2vw] text-[4vw] sm:text-[1.2vw] font-[PlinaReg] max-w-2xl">
                    Inwestycja w profesjonalną obecność w sieci zwraca się wielokrotnie. Wybierz pakiet dopasowany do Twoich potrzeb.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-[10vw]">
                {packages.map((pkg, index) => (
                    <div key={index} className={`border border-white p-8 hover:bg-white hover:text-black transition-colors duration-500 group flex flex-col justify-between min-h-[400px]`}>
                        <div>
                            <h3 className="text-2xl font-[silkSerif] mb-2">{pkg.name}</h3>
                            <h4 className="text-3xl font-bold font-[PlinaReg] mb-6">{pkg.price}</h4>
                            <ul className="space-y-3 font-[PlinaReg] text-sm opacity-80 group-hover:opacity-100 mb-8">
                                {pkg.features.map((feat, i) => (
                                    <li key={i}>• {feat}</li>
                                ))}
                            </ul>
                        </div>
                        <button className="w-full border border-current py-3 rounded-full uppercase text-sm font-bold hover:bg-black hover:text-white transition-colors">
                            Wybierz
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing
