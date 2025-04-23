"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"

const educationData = {
  degree: "Bachelor's Degree",
  field: "Computer Science",
  institution: "University of Example",
  year: "2018",
  description:
    "My education provided a strong foundation in computer science principles and software development methodologies.",
}

export default function Education() {
  return (
    <section id="education" className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="bg-sky-500/20 text-sky-400 p-2 rounded-lg">My</span>
          <span>Education</span>
        </h2>

        <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-slate-700/50">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-sky-500/20 p-3 rounded-lg text-sky-400">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{educationData.degree}</h3>
              <p className="text-gray-300">{educationData.field}</p>
            </div>
            <div className="ml-auto flex items-center gap-2 text-sky-400">
              <Calendar size={16} />
              <span>
                {educationData.institution}, {educationData.year}
              </span>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">{educationData.description}</p>
        </div>
      </motion.div>
    </section>
  )
}
