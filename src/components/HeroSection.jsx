"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-scroll"
import Typed from "typed.js"
import { loadFull } from "tsparticles"

const HeroSection = () => {
  const typedTextRef = useRef(null)
  const particlesInit = async (engine) => {
    // This is the correct way to initialize tsParticles
    await loadFull(engine)
  }

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ["Web Development", "Mobile App Development", "IT Consulting", "Technical Training"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Replace the entire Particles component with this: */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -Math.random() * 100 - 50],
              x: [0, (Math.random() - 0.5) * 50],
              opacity: [1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-pink-500/20 to-violet-500/20 text-pink-300 text-sm font-medium"
            >
              Welcome to TechSolutions
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Transforming Ideas Into{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg text-gray-300 mb-4"
            >
              We specialize in{" "}
              <span
                ref={typedTextRef}
                className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400"
              ></span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Our expert team delivers innovative solutions tailored to your business needs, helping you stay ahead in
              the digital landscape.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-md text-white font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all transform hover:-translate-y-1">
                  Get Started
                </button>
              </Link>
              <Link to="services" spy={true} smooth={true} offset={-70} duration={500}>
                <button className="px-6 py-3 border border-pink-500/30 rounded-md text-white font-medium hover:bg-pink-500/10 transition-all transform hover:-translate-y-1">
                  Our Services
                </button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-pink-500/20 to-violet-500/20 rounded-full blur-3xl"></div>
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="relative z-10"
              >
                <svg viewBox="0 0 200 200" className="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#FF0066"
                    d="M45.3,-51.2C58.3,-40.9,68.8,-25.9,71.8,-9.2C74.9,7.5,70.5,25.9,60.1,39.3C49.7,52.7,33.3,61.1,15.8,65.2C-1.7,69.3,-20.3,69.2,-35.3,61.4C-50.3,53.7,-61.6,38.3,-67.1,21.2C-72.6,4.1,-72.2,-14.7,-64.1,-29.8C-56,-44.9,-40.2,-56.2,-24.4,-64.8C-8.6,-73.4,7.2,-79.3,21.8,-75.1C36.3,-70.9,49.7,-56.6,45.3,-51.2Z"
                    transform="translate(100 100)"
                  />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </motion.div>
                    </div>
                    <p className="text-white font-medium">Innovative Solutions</p>
                  </div>
                </div>

                <motion.div
                  className="absolute top-10 -right-10 p-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg"
                  animate={{
                    y: [0, 15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 1,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  className="absolute bottom-10 -left-10 p-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    delay: 0.5,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-violet-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex flex-col items-center"
        >
          <p className="text-gray-400 mb-2">Scroll to explore</p>
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
