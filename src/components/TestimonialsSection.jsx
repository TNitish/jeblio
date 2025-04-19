"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, HealthTech Inc.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content:
      "Working with this team was a game-changer for our business. They delivered our web application ahead of schedule and exceeded our expectations in terms of quality and performance.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, EduStart",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content:
      "The mobile app they developed for our startup has received outstanding feedback from users. Their attention to detail and commitment to excellence is truly impressive.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Product Manager, RetailPlus",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content:
      "Their team's technical expertise and problem-solving skills helped us overcome complex challenges in our e-commerce platform. I highly recommend their services.",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "IT Director, FinServe",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    content:
      "The custom software solution they built has streamlined our operations and significantly reduced costs. Their ongoing support has been exceptional.",
  },
  {
    id: 5,
    name: "Emma Rodriguez",
    role: "Marketing Director, TravelEase",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    content:
      "From concept to execution, they delivered a website that perfectly captures our brand and has dramatically increased our conversion rates. A pleasure to work with!",
  },
]

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState([])

  useEffect(() => {
    // Determine how many testimonials to show based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Show 3 on large screens
        setVisibleTestimonials(getVisibleItems(3))
      } else if (window.innerWidth >= 640) {
        // Show 2 on medium screens
        setVisibleTestimonials(getVisibleItems(2))
      } else {
        // Show 1 on small screens
        setVisibleTestimonials(getVisibleItems(1))
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [activeIndex])

  const getVisibleItems = (count) => {
    const result = []
    for (let i = 0; i < count; i++) {
      const index = (activeIndex + i) % testimonials.length
      result.push(testimonials[index])
    }
    return result
  }

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-slate-900 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-pink-500/20 to-violet-500/20 text-pink-300 text-sm font-medium">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            What Our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-6 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-full"
                >
                  <div className="h-full rounded-xl p-6 backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/5">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-pink-500/30">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{testimonial.name}</h4>
                          <p className="text-sm text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-pink-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="italic text-gray-300">{testimonial.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              aria-label="Next testimonial"
              className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
