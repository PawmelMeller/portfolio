import React from 'react'
import { Helmet } from 'react-helmet-async'
import Footer from '../components/Footer/Index'

const ServicesWeb = () => {
    return (
        <div data-scroll-section className="pt-[15vh] px-[4vw] min-h-screen">
            <Helmet>
                <title>Tworzenie Stron Internetowych Gdańsk | Projektowanie Stron WWW</title>
                <meta name="description" content="Profesjonalne tworzenie stron internetowych (HTML, WordPress, Webflow). Nowoczesne, szybkie i zgodne z SEO strony www dla Twojego biznesu." />
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Tworzenie Stron Internetowych",
                            "provider": {
                                "@type": "Organization",
                                "name": "Craze Studio",
                                "url": "https://craze-studio.pl"
                            },
                            "areaServed": {
                                "@type": "City",
                                "name": "Sopot"
                            },
                            "hasOfferCatalog": {
                                "@type": "OfferCatalog",
                                "name": "Usługi Web Development",
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Strona Wizytówka"
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Strona CMS WordPress/Next.js"
                                        }
                                    }
                                ]
                            }
                        }
                    `}
                </script>
            </Helmet>

            <div className="mb-[10vw] sm:mb-[4vw]">
                <h1 className="text-[10vw] leading-[10vw] tracking-tighter sm:text-[6vw] sm:leading-[6.5vw] uppercase font-[PlinaReg]">
                    Tworzenie Stron WWW
                </h1>
                <p className="mt-[4vw] sm:mt-[2vw] text-[4vw] sm:text-[1.2vw] font-[PlinaReg] max-w-3xl">
                    Projektujemy i wdrażamy strony internetowe, które nie tylko dobrze wyglądają, ale przede wszystkim realizują cele biznesowe.
                    Od prostych wizytówek po zaawansowane serwisy korporacyjne.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-[10vw]">
                <div className="border-t border-white pt-6">
                    <h3 className="text-2xl font-bold mb-4 font-[silkSerif]">Technologie</h3>
                    <ul className="list-disc pl-5 font-[PlinaReg]">
                        <li>HTML5 / CSS3 / JavaScript</li>
                        <li>React / Next.js</li>
                        <li>WordPress (Custom Themes)</li>
                        <li>Webflow</li>
                    </ul>
                </div>
                <div className="border-t border-white pt-6">
                    <h3 className="text-2xl font-bold mb-4 font-[silkSerif]">Dlaczego my?</h3>
                    <ul className="list-disc pl-5 font-[PlinaReg]">
                        <li>Indywidualny design (UI/UX)</li>
                        <li>Optymalizacja SEO na start</li>
                        <li>Responsywność (RWD)</li>
                        <li>Szybkość ładowania (Core Web Vitals)</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default ServicesWeb
