import './App.css'
import { useRef, useEffect } from 'react'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import ServicesWeb from './pages/ServicesWeb'
import ServicesEcom from './pages/ServicesEcom'
import ServicesApps from './pages/ServicesApps'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import AboutPage from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import FAQ from './pages/FAQ'

function App() {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    // Optional: Manually trigger resize on route change if needed
    if (containerRef.current) {
      // This might be needed if locomotive scroll doesn't pick up height changes automatically
    }
  }, [location])

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options 
      }}
      watch={[location]} // Watch location to update scroll on route change
      containerRef={containerRef}
    >
      <div ref={containerRef} data-scroll-container className='main text-white overflow-hidden'>
        <Helmet>
          {/* Google Analytics 4 - Replace 'G-XXXXXXXXXX' with your Measurement ID */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
          <script>
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-XXXXXXXXXX');
                `}
          </script>
        </Helmet>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="strony-www" element={<ServicesWeb />} />
            <Route path="sklepy-internetowe" element={<ServicesEcom />} />
            <Route path="aplikacje-webowe" element={<ServicesApps />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="kontakt" element={<Contact />} />
            <Route path="cennik" element={<Pricing />} />
            <Route path="o-mnie" element={<AboutPage />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </div>
    </LocomotiveScrollProvider>
  )
}

export default App
