import React from 'react'
import { Helmet } from 'react-helmet-async'
// Reusing Project component or creating a similar grid
// For simplicity, let's reuse the Project component structure or just import it 
// but usually Portfolio page has more items. 
// Let's create a dedicated simplified grid for now.

const Portfolio = () => {
    const [filter, setFilter] = React.useState('Wszystkie');

    const projects = [
        { id: 1, title: 'OLGA PRUDKA', category: 'Strony WWW', date: '2023', img: import.meta.env.BASE_URL + 'images/lake2.jpg' },
        { id: 2, title: 'OCHI', category: 'E-commerce', date: '2022', img: import.meta.env.BASE_URL + 'images/image1.jpg' },
        { id: 3, title: 'REVIVE', category: 'Branding', date: '2024', img: import.meta.env.BASE_URL + 'images/image3.png' },
        { id: 4, title: 'AGENCY', category: 'Aplikacje', date: '2023', img: import.meta.env.BASE_URL + 'images/flow.png' },
        { id: 5, title: 'NORDIC', category: 'Strony WWW', date: '2023', img: import.meta.env.BASE_URL + 'images/lake2.jpg' },
        { id: 6, title: 'ALARA', category: 'E-commerce', date: '2024', img: import.meta.env.BASE_URL + 'images/image1.jpg' },
    ]

    const filteredProjects = filter === 'Wszystkie' ? projects : projects.filter(p => p.category === filter);
    const categories = ['Wszystkie', 'Strony WWW', 'E-commerce', 'Aplikacje', 'Branding'];

    return (
        <div data-scroll-section className="pt-[15vh] px-[4vw] min-h-screen">
            <Helmet>
                <title>Portfolio | Nasze Realizacje - Strony i Sklepy WWW</title>
                <meta name="description" content="Zobacz nasze realizacje. Projektujemy nowoczesne strony internetowe, sklepy e-commerce i aplikacje webowe. Sprawdź nasze portfolio." />
            </Helmet>

            <div className="mb-[8vw]">
                <h1 className="text-[10vw] leading-[10vw] tracking-tighter sm:text-[6vw] sm:leading-[6.5vw] uppercase font-[PlinaReg]">
                    Portfolio
                </h1>
                <div className="flex gap-4 mt-8 flex-wrap font-[PlinaReg]">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full border border-white transition-colors ${filter === cat ? 'bg-white text-black' : 'hover:bg-white hover:text-black'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[4vw] pb-[10vw]">
                {filteredProjects.map(project => (
                    <div key={project.id} className="group cursor-pointer">
                        <div className="relative overflow-hidden w-full aspect-[4/3] mb-4">
                            <img src={project.img} alt={project.title} className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="border-t border-white pt-4 flex justify-between font-[PlinaReg]">
                            <div>
                                <h3 className="text-2xl uppercase">{project.title}</h3>
                                <p className="text-gray-400">{project.category}</p>
                            </div>
                            <span>{project.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
