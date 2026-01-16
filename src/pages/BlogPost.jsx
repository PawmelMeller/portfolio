import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from '../data/blogPosts'
import UnderLine from '../components/Underline/Index'

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <div className="pt-[20vh] text-center text-white">Artykuł nie został znaleziony.</div>
    }

    return (
        <div data-scroll-section className="pt-[15vh] px-[4vw] min-h-screen">
            <Helmet>
                <title>{post.title} | Blog WebDev Agency</title>
                <meta name="description" content={post.excerpt} />
            </Helmet>

            <div className="max-w-4xl mx-auto">
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors mb-8 inline-block font-[PlinaReg]">
                    ← Wróć do bloga
                </Link>

                <div className="mb-[4vw]">
                    <span className="text-[#3f7df4] uppercase tracking-wider font-[PlinaReg] block mb-4">{post.tag}</span>
                    <h1 className="text-[8vw] leading-[1.1] sm:text-[3.5vw] font-[silkSerif] mb-8">
                        {post.title}
                    </h1>
                    <div className="text-gray-500 font-[PlinaReg] border-l border-gray-700 pl-4">
                        Data publikacji: {post.date}
                    </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none font-[PlinaReg] blog-content">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <UnderLine marginBottom='4vw' marginTop='4vw' />

                <div className="text-center py-10">
                    <Link to="/kontakt" className="inline-block border border-white rounded-full px-8 py-3 hover:bg-white hover:text-black transition-colors uppercase font-[PlinaReg]">
                        Skontaktuj się z nami
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogPost
