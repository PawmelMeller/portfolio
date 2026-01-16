
import styles from './Style.module.css'
import AnimatedLink from '../AnimatedLink'
import MagneticGSAP from '../GsapMagnetic'
import { motion, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const data = [
    { title: 'Oferta', path: '/strony-www' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Cennik', path: '/cennik' },
    { title: 'O mnie', path: '/o-mnie' },
    { title: 'Kontakt', path: '/kontakt' },
  ]

  const mapRange = (
    inputLower,
    inputUpper,
    outputLower,
    outputUpper,
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0)
  }

  const setTransform = (item, event, x, y) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(1, bounds.width, -2, 2)(relativeX)
    const yRange = mapRange(1, bounds.height, -2, 2)(relativeY)
    x.set(xRange * 10)
    y.set(yRange * 10)
    console.log(xRange)
  }


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full ">
      <div className="header 
        flex sm:items-start justify-between 
        px-[4vw] py-[6vw]
        sm:px-[3vw] sm:py-[2vw]"
      >
        <div className="first w-[26vw] flex items-start justify-between ">
          <div className="w-[3vw] flex items-center gap-[2.2vw]  ">
            <div onClick={toggleMenu} className="cursor-pointer relative z-[60]">
              <svg className="menu-opener__square" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <rect y="10" width="2" height="2" fill="currentColor"></rect>
                <rect y="5" width="2" height="2" fill="currentColor"></rect>
                <rect width="2" height="2" fill="currentColor"></rect>
                <rect x="5" y="10" width="2" height="2" fill="currentColor"></rect>
                <rect x="5" y="5" width="2" height="2" fill="currentColor"></rect>
                <rect x="5" width="2" height="2" fill="currentColor"></rect>
                <rect x="10" y="10" width="2" height="2" fill="currentColor"></rect>
                <rect x="10" y="5" width="2" height="2" fill="currentColor"></rect>
                <rect x="10" width="2" height="2" fill="currentColor"></rect>
              </svg>
            </div>
            <Link to="/" className="logo hidden sm:inline-block font-[PlinaReg] text-[1.5vw] uppercase tracking-tighter">
              Meller Web
            </Link>
          </div>

          <div className="first2 hidden sm:inline-block text-[.9vw] leading-none">
            <h5>Meller Web</h5>
            <h5>Creative</h5>
            <h5>Development</h5>
          </div>
        </div>

        <div className='last hidden sm:flex items-start w-[14vw] justify-around relative 
          text-[.9vw]'
        >
          {data.map((item, index) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            return (
              <Link to={item.path} key={index}>
                <motion.div
                  onPointerMove={(event) => {
                    const item = event.currentTarget;
                    setTransform(item, event, x, y)
                  }}
                  onPointerLeave={() => {
                    x.set(0)
                    y.set(0)
                  }}
                  style={{ x, y }}
                  className={`navText ${styles.navText} px-[1.3vw] py-[1.1vw] cursor-pointer`}
                >
                  <span className={`text ${styles.text}`}>{item.title}</span>
                </motion.div>
              </Link>
            )
          })}
        </div>


        <Link to="/" className="logo 
          inline-block
          sm:hidden
          font-[PlinaReg] text-[5vw] uppercase tracking-tighter
        ">
          Meller Web
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#151515] z-[50] flex flex-col items-center justify-center space-y-8 font-[PlinaReg] text-4xl uppercase">
          {data.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-gray-400 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
