import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../Navbar/Index'
import Footer from '../Footer/Index'
import Cursor from '../Cursor/Index'
import Loader from '../loader/Index'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Cursor />
            <Loader />
            <Helmet>
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Craze Studio",
                            "url": "https://craze-studio.pl",
                            "logo": "https://craze-studio.pl/icons/icon-512x512.png",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+48 508 843 219",
                                "contactType": "customer service",
                                "availableLanguage": "Polish"
                            },
                            "sameAs": [
                                "https://www.facebook.com/mellerweb",
                                "https://www.instagram.com/mellerweb"
                            ]
                        }
                    `}
                </script>
            </Helmet>
            <div className='bg-[#151515] min-h-screen text-white'>
                <Navbar />
                <main>
                    <Outlet />
                </main>
                {/* Footer is usually on every page, but if it was inside the scroll container in App.jsx, 
            we need to decide if it stays here or goes into individual pages. 
            For a standard site, it's usually in Layout, but with Locomotive Scroll, 
            everything typically needs to be inside the scroll container.
            
            However, the LocomotiveScrollProvider in App.jsx wraps the whole Routes.
            So if Layout is used inside Routes, the scroll container will wrap Layout.
        */}
                <Footer />
            </div>
        </>
    )
}

export default Layout
