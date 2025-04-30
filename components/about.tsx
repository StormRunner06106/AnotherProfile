"use client"

import { ADDRESS, MAIL } from "@/lib/constants"
import { motion } from "framer-motion"
import { Mail, MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="section-title">
          <span className="section-highlight">About</span>
          <span>Me</span>
        </h2>

        <div className="glass-card rounded-2xl p-8">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">Professional Summary</h3>
            <div className="flex flex-col text-slate-600">
              <div className="flex items-center gap-2 mb-1">
                <Mail size={16} className="text-sky-600" />
                <span>{ MAIL }</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-sky-600" />
                <span>{ ADDRESS }</span>
              </div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed mb-6">
            I am an innovative and results-driven AI Developer with over 10 years of experience in full-stack
            development for web and mobile applications. My expertise lies in building AI-powered systems and seamlessly
            integrating APIs across platforms. I pride myself on being highly adaptable and customer-focused, with a
            passion for continuous learning and staying at the forefront of emerging technologies.
          </p>

          <p className="text-slate-700 leading-relaxed">
            Throughout my career, I have demonstrated success in both freelance and corporate environments, leading
            teams and delivering intelligent solutions that consistently exceed expectations. My approach combines
            technical excellence with a deep understanding of user needs, resulting in applications that are not only
            powerful but also intuitive and accessible.
            <a rel="me" href="https://mastodon.social/@lucastaylor66">Mastodon</a>
          </p>
        </div>
      </motion.div>
    </section>
  )
}
