import React from 'react'
import { Helmet } from 'react-helmet-async'

const ServicesEcom = () => {
    return (
        <div data-scroll-section className="pt-[15vh] px-[4vw] min-h-screen">
            <Helmet>
                <title>Tworzenie Sklepów Internetowych | WooCommerce, Shopify</title>
                <meta name="description" content="Skuteczne sklepy internetowe, które sprzedają. Wdrożenia WooCommerce i Shopify, integracje płatności i kurierów. Zbuduj swój e-commerce z nami." />
            </Helmet>

            <div className="mb-[10vw] sm:mb-[4vw]">
                <h1 className="text-[10vw] leading-[10vw] tracking-tighter sm:text-[6vw] sm:leading-[6.5vw] uppercase font-[PlinaReg]">
                    Sklepy Internetowe
                </h1>
                <p className="mt-[4vw] sm:mt-[2vw] text-[4vw] sm:text-[1.2vw] font-[PlinaReg] max-w-3xl">
                    Budujemy sklepy online nastawione na konwersję. Pomagamy wybrać odpowiednią platformę i konfigurujemy wszystko, czego potrzebujesz do sprzedaży.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-[10vw]">
                <div className="border-t border-white pt-6">
                    <h3 className="text-2xl font-bold mb-4 font-[silkSerif]">Platformy</h3>
                    <ul className="list-disc pl-5 font-[PlinaReg]">
                        <li>WooCommerce (WordPress)</li>
                        <li>Shopify</li>
                        <li>PrestaShop</li>
                        <li>Custom Solutions</li>
                    </ul>
                </div>
                <div className="border-t border-white pt-6">
                    <h3 className="text-2xl font-bold mb-4 font-[silkSerif]">Co otrzymasz?</h3>
                    <ul className="list-disc pl-5 font-[PlinaReg]">
                        <li>Intuicyjny panel zarządzania</li>
                        <li>Integracje płatności (Blik, PayU, Stripe)</li>
                        <li>Integracje kurierskie (InPost, DPD)</li>
                        <li>Szkolenie z obsługi</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServicesEcom
