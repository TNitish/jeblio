"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    id: "shoply",
    title: "Shoply",
    description:
      "A modern eCommerce platform that offers seamless shopping experience with personalized recommendations and easy checkout.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    category: "web",
    technologies: ["React", "Node.js", "Stripe API", "MongoDB"],
    // gradient: "from-pink-500 to-red-500",
  },
  {
    id: "fitpulse",
    title: "FitPulse",
    description:
      "A mobile app designed to help users track their daily workouts, monitor heart rate, and set fitness challenges with friends.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    technologies: ["React Native", "Firebase", "Redux", "Health API"],
    // gradient: "from-green-600 to-teal-600",
  },
  {
    id: "smartretail",
    title: "SmartRetail",
    description: "An inventory management system with predictive analytics for retail businesses.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    category: "web",
    technologies: ["Angular", "Python", "PostgreSQL", "Docker"],
    // gradient: "from-cyan-600 to-blue-600",
  },
  {
    id: "travelbuddy",
    title: "TravelBuddy",
    description: "A travel companion app that offers personalized recommendations and itinerary planning.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop",
    category: "mobile",
    technologies: ["Flutter", "Google Maps API", "Firebase", "GraphQL"],
    // gradient: "from-emerald-600 to-teal-600",
  },
]

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all")
  const [hoveredProject, setHoveredProject] = useState(null)

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-purple-900/70 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-pink-500/20 to-violet-500/20 text-pink-300 text-sm font-medium">
            Our Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Recent{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and innovation
          </p>
        </motion.div>

        <div className="mb-12 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex p-1 bg-white/5 backdrop-blur-sm rounded-full"
          >
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "all"
                  ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("all")}
            >
              All Projects
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "web"
                  ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("web")}
            >
              Web Development
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "mobile"
                  ? "bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setActiveTab("mobile")}
            >
              Mobile Apps
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              <div className="overflow-hidden rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70`}></div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {/* <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        hoveredProject === project.id
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.3 }}
                      className="px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-md text-white font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all"
                    >
                      View Project
                    </motion.button> */}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-violet-500 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <div className="text-center mt-12">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-md text-white font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all transform hover:-translate-y-1"
          >
            View All Projects
          </motion.button>
        </div> */}
      </div>
    </section>
  )
}

export default ProjectsSection
