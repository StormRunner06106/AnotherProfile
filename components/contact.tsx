"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, Phone, Github, Linkedin, Facebook } from "lucide-react"
import toast from "react-hot-toast"
import { FACEBOOK_NAME, GITHUB_NAME, MAIL, PHONE_NUMBER } from "@/lib/constants"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast.success("Message sent successfully!", {
        style: {
          background: "#fff",
          color: "#333",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          borderRadius: "8px",
          padding: "16px",
        },
        iconTheme: {
          primary: "#4ade80",
          secondary: "#fff",
        },
      })

      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        style: {
          background: "#fff",
          color: "#333",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          borderRadius: "8px",
          padding: "16px",
        },
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="pt-16 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          <span className="section-highlight">Get in</span>
          <span>Touch</span>
        </h2>

        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto" style={{"fontSize": "45px"}}>
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="glass-card rounded-2xl p-8 blur-effect">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Contact Information</h3>

            <div className="grid grid-cols-2 gap-6">
              <div className="inner-card flex flex-col items-center text-center">
                <div className="bg-sky-100 p-3 rounded-lg text-sky-600 mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <h4 className="text-slate-800 font-medium mb-1">Email</h4>
                <p className="text-slate-600 text-sm">{ MAIL }</p>
              </div>

              <div className="inner-card flex flex-col items-center text-center">
                <div className="bg-sky-100 p-3 rounded-lg text-sky-600 mb-4">
                  <Phone className="h-6 w-6" />
                </div>
                <h4 className="text-slate-800 font-medium mb-1">Phone</h4>
                <p className="text-slate-600 text-sm">{ PHONE_NUMBER }</p>
              </div>

              <div className="inner-card flex flex-col items-center text-center">
                <div className="bg-sky-100 p-3 rounded-lg text-sky-600 mb-4">
                  <Github className="h-6 w-6" />
                </div>
                <h4 className="text-slate-800 font-medium mb-1">GitHub</h4>
                <p className="text-slate-600 text-sm">{ GITHUB_NAME }</p>
              </div>

              <div className="inner-card flex flex-col items-center text-center">
                <div className="bg-sky-100 p-3 rounded-lg text-sky-600 mb-4">
                  <Facebook className="h-6 w-6" />
                </div>
                <h4 className="text-slate-800 font-medium mb-1">Facebook</h4>
                <p className="text-slate-600 text-sm">{ FACEBOOK_NAME }</p>
              </div>
            </div>

            <div className="mt-8 inner-card">
              <p className="text-slate-700">
                Whether you're interested in collaboration, have a project in mind, or just want to connect, I'm always
                open to discussing new opportunities and ideas.
              </p>
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="glass-card rounded-2xl p-8 blur-effect">
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-slate-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-slate-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-slate-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 font-medium"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
