import React from 'react'
import { Helmet } from 'react-helmet-async'

const AboutPage = () => {
    return (
        <div data-scroll-section className="pt-[15vh] px-[4vw] min-h-screen">
            <Helmet>
                <title>O nas | WebDev Agency - Kim jesteśmy</title>
                <meta name="description" content="Poznaj zespół WebDev Agency. Pasjonaci designu i technologii. Tworzymy cyfrowe doświadczenia, które wyróżniają marki na rynku." />
            </Helmet>

            <div className="mb-[8vw]">
                <h1 className="text-[10vw] leading-[10vw] tracking-tighter sm:text-[6vw] sm:leading-[6.5vw] uppercase font-[PlinaReg]">
                    O mnie / O nas
                </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-[5vw] mb-[10vw]">
                <div className="sm:w-1/2">
                    <img src="https://obys.agency/wp-content/uploads/2020/07/content-image01.jpg" alt="Team Work" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
                <div className="sm:w-1/2 font-[PlinaReg]">
                    <h2 className="text-3xl mb-6">Doświadczenie & Pasja</h2>
                    <p className="text-xl mb-6 text-gray-300">
                        Jestem freelancerem (lub małym zespołem), który od lat pomaga firmom zaistnieć w internecie.
                        Specjalizuję się w tworzeniu stron, które są nie tylko estetyczne, ale i funkcjonalne.
                        Moje podejście łączy artystyczną wizję z solidnym kodem.
                    </p>
                    <h2 className="text-3xl mb-6">Tech Stack</h2>
                    <div className="flex flex-wrap gap-4">
                        {["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Tailwind CSS", "GSAP", "WordPress", "Node.js"].map(tech => (
                            <span key={tech} className="border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black cursor-default transition-colors">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
