import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-pink-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Hands-on Experience",
    description:
      "Work on real-world projects under the guidance of industry experts.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-purple-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "Certification",
    description:
      "Receive a recognized certificate upon successful completion of the internship.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Flexible Schedule",
    description:
      "Programs designed to accommodate student schedules and academic commitments.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-cyan-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: "Mentorship",
    description:
      "One-on-one guidance from experienced professionals in your field of interest.",
  },
];

const InternshipSection = () => {
  return (
    <section id="internships" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-purple-900/30 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-gradient-to-r from-pink-500/20 to-violet-500/20 text-pink-300 text-sm font-medium">
              For Students
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Internship &{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Training Programs
              </span>
            </h2>
            <p className="text-gray-300 mb-8">
              We offer comprehensive internship and training programs designed to
              help students and recent graduates gain practical experience and
              develop the skills needed to succeed in the tech industry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{benefit.title}</h3>
                    <p className="text-sm text-gray-400">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-500 rounded-md text-white font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all"
            >
              Apply for Internship
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl">
              <div className="p-6 border-b border-white/10">
                <h3 className="text-2xl font-bold text-white mb-1">
                  Technical Training
                </h3>
                <p className="text-gray-400">
                  For college students and professionals
                </p>
              </div>
              <div className="p-6">
                <ul className="space-y-4 mb-6">
                  {[
                    "Web Development (React, Angular, Vue.js)",
                    "Mobile App Development (React Native, Flutter)",
                    "Backend Development (Node.js, Python, Java)",
                    "Cloud Computing (AWS, Azure, Google Cloud)",
                    "DevOps & CI/CD Pipelines",
                    "Data Science & Machine Learning",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-pink-400 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <div>
                    <p className="text-sm text-gray-400">Starting from</p>
                    <p className="text-2xl font-bold text-white">$299</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-pink-500 to-violet-500 rounded-md text-white font-medium hover:shadow-lg hover:shadow-pink-500/20 transition-all"
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
