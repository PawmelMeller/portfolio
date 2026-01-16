import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

const Blog = () => {
    const parseDate = (dateStr) => {
        const [day, month, year] = dateStr.split('.');
        return new Date(`${year}-${month}-${day}`);
    };

    const posts = [...blogPosts].sort((a, b) => parseDate(b.date) - parseDate(a.date));

    return (
        <div data-scroll-section className="pt-[15vh] px-[4vw] min-h-screen">
            <Helmet>
                <title>Blog | Porady React, Next.js i Marketing - Paweł Meller</title>
                <meta name="description" content="Czytaj nasz blog. Ekspercka wiedza o React, Next.js, SEO i tworzeniu stron www. Poradniki i porównania." />
            </Helmet>

            <div className="mb-[8vw]">
                <h1 className="text-[10vw] leading-[10vw] tracking-tighter sm:text-[6vw] sm:leading-[6.5vw] uppercase font-[PlinaReg]">
                    Blog
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-[4vw] pb-[10vw]">
                {posts.map((post, index) => (
                    <Link to={`/blog/${post.slug}`} key={index} className="border-t border-white pt-8 sm:flex justify-between items-start group cursor-pointer hover:bg-[#1a1a1a] transition-colors p-4 -mx-4 rounded-xl">
                        <div className="sm:w-2/3">
                            <span className="text-sm text-[#3f7df4] mb-2 block uppercase tracking-wider">{post.tag}</span>
                            <h2 className="text-3xl sm:text-5xl font-[silkSerif] mb-4 group-hover:underline">{post.title}</h2>
                            <p className="text-gray-400 font-[PlinaReg] text-lg sm:w-3/4">{post.excerpt}</p>
                        </div>
                        <div className="mt-4 sm:mt-0 font-[PlinaReg] text-gray-500">
                            {post.date}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Blog
