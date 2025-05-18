"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const PopupForm = ({ isOpen, onClose, title, formType }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    course: "",
    applicantType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use different endpoints based on formType
      let endpoint = "";
      let payload = {};

      if (formType === "technical training") {
        // Use the same endpoint as ContactSection
        endpoint = "https://b03f-2401-4900-1ce3-576d-d855-78e1-b632-207b.ngrok-free.app/contacts/";
        payload = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        };
      } else if (formType === "internship") {
        // Use the internship-specific endpoint
        endpoint = "https://b03f-2401-4900-1ce3-576d-d855-78e1-b632-207b.ngrok-free.app/submit/";
        payload = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          type: formData.applicantType,
          course: formData.course
        };
      } else {
        // Default endpoint for other form types
        endpoint = "https://b03f-2401-4900-1ce3-576d-d855-78e1-b632-207b.ngrok-free.app/contacts/";
        payload = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        };
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      console.log(`${formType} form submitted successfully:`, result);

      // Show success status
      setSubmitStatus({
        type: 'success',
        message: `Thank you for your ${formType} submission! We'll get back to you soon.`
      });

      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        education: "",
        course: "",
        applicantType: "",
        message: "",
      });

      // Auto close after successful submission after a short delay
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, there was an error submitting your form. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70"
            onClick={onClose}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative w-full max-w-md bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl shadow-xl overflow-hidden z-10"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-violet-500"></div>

            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400 hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {submitStatus && (
                <div 
                  className={`mb-4 p-4 rounded-lg ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Enter your mail id"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    placeholder="Enter your mobile no"
                  />
                </div>

                {formType === "internship" && (
                  <>
                    <div>
                      <label htmlFor="applicantType" className="block text-sm font-medium text-gray-300 mb-1">
                        Applicant Type *
                      </label>
                      <select
                        id="applicantType"
                        name="applicantType"
                        value={formData.applicantType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select your status</option>
                        <option value="student">Student</option>
                        <option value="employee">Working Employee</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="course" className="block text-sm font-medium text-gray-300 mb-1">
                        Course Interested In *
                      </label>
                      <select
                        id="course"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a course</option>
                        <option value="AI/ML Bootcamp">AI/ML Bootcamp</option>
                        <option value="Data Science & Data Analytics">Data Science & Data Analytics</option>
                        <option value="Full Stack Web Development">Full Stack Web Development</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Data Science & ML">Data Science & ML</option>
                        <option value="Backend Development">Backend Development</option>
                      </select>
                    </div>
                  </>
                )}

                {formType === "technical training" && (
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-300 mb-1">
                      Course Interested In *
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a course</option>
                      <option value="AI/ML Bootcamp">AI/ML Bootcamp</option>
                      <option value="Data Science & Data Analytics">Data Science & Data Analytics</option>
                      <option value="Full Stack Web Development">Full Stack Web Development</option>
                      <option value="Cloud Computing">Cloud Computing</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Data Science & ML">Data Science & ML</option>
                      <option value="Backend Development">Backend Development</option>
                    </select>
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors resize-none"
                    placeholder={
                      formType === "internship"
                        ? "Tell us about your interests and skills..."
                        : formType === "technical training"
                        ? "Tell us about your learning goals..."
                        : "Any specific requirements or questions?"
                    }
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg text-white font-medium transition-all flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-pink-500/20'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    `Submit ${formType === "internship" ? "Application" : "Request"}`
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;