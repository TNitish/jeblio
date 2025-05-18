import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-gradient-to-r from-white/70 via-pink-300/80 to-violet-500/80 backdrop-blur-md shadow-lg py-2"
      : "bg-transparent py-4"
  }`}
>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
<span className="flex items-center text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent ml-4">
  <img src="/jeblio_icon.png" alt="Jeblio Logo" className="w-10 h-10 mr-2" />
  Jeblio
</span>


          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-base font-medium hover:text-pink-400 transition-colors cursor-pointer"
              >
              Services
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="internships"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-base font-medium hover:text-pink-400 transition-colors cursor-pointer"
              >
              Internships
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-base font-medium hover:text-pink-400 transition-colors cursor-pointer"
              >
              Testimonials
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
                        <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-base font-medium hover:text-pink-400 transition-colors cursor-pointer"
              >
              Projects
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >

            {/* <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-md text-white font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all cursor-pointer"
            >
              Contact Us
            </Link> */}
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button
className="md:hidden text-gray-800 p-2"
onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-gradient-to-b from-white/90 via-pink-200/90 to-violet-200/90 backdrop-blur-md shadow-lg"
          >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-sm font-medium hover:text-pink-400 transition-colors py-2 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>

            <Link
              to="internships"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-sm font-medium hover:text-pink-400 transition-colors py-2 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Internships
            </Link>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-sm font-medium hover:text-pink-400 transition-colors py-2 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-sm font-medium hover:text-pink-400 transition-colors py-2 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-md text-white font-medium hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>

          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
