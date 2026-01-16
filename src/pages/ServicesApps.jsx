import React from 'react'
import { Helmet } from 'react-helmet-async'

const ServicesApps = () => {
    return (
        <div data-scroll-section className="pt-[15vh] px-[4vw] min-h-screen">
            <Helmet>
                <title>Projektowanie Aplikacji Webowych | MVP, CRM, SaaS</title>
                <meta name="description" content="Dedykowane aplikacje webowe dla biznesu. Tworzymy systemy CRM, platformy SaaS, aplikacje MVP i kalkulatory. Nowoczesne technologie i skalowalne rozwiązania." />
            </Helmet>

            <div className="mb-[10vw] sm:mb-[4vw]">
                <h1 className="text-[10vw] leading-[10vw] tracking-tighter sm:text-[6vw] sm:leading-[6.5vw] uppercase font-[PlinaReg]">
                    Aplikacje Webowe
                </h1>
                <p className="mt-[4vw] sm:mt-[2vw] text-[4vw] sm:text-[1.2vw] font-[PlinaReg] max-w-3xl">
                    Tworzymy zaawansowane oprogramowanie działające w przeglądarce. Od pomysłu po MVP i skalowalny produkt.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-[10vw]">
                <div className="border-t border-white pt-6">
                    <h3 className="text-2xl font-bold mb-4 font-[silkSerif]">Rozwiązania</h3>
                    <ul className="list-disc pl-5 font-[PlinaReg]">
                        <li>Systemy CRM / ERP</li>
                        <li>Platformy B2B / B2C</li>
                        <li>Aplikacje edukacyjne (LMS)</li>
                        <li>Minimum Viable Product (MVP)</li>
                    </ul>
                </div>
                <div className="border-t border-white pt-6">
                    <h3 className="text-2xl font-bold mb-4 font-[silkSerif]">Stack</h3>
                    <ul className="list-disc pl-5 font-[PlinaReg]">
                        <li>React / Vue / Angular</li>
                        <li>Node.js / Python / PHP</li>
                        <li>SQL / NoSQL Databases</li>
                        <li>Cloud Infrastructure (AWS/Google)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ServicesApps
