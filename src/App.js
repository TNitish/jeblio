"use client"

import { useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
import "./index.css" // ✅ Ensure Tailwind styles are applied

// Components
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import ServicesSection from "./components/ServicesSection"
import ProjectsSection from "./components/ProjectsSection"
import InternshipSection from "./components/InternshipSection"
import TestimonialsSection from "./components/TestimonialsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

function App() {
  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    })
  }, [])

  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header />
        <main className="space-y-20">
          <HeroSection />
          <ServicesSection />
          <InternshipSection />
          <TestimonialsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
