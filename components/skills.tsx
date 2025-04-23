"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Database, Brain, Users, Palette } from "lucide-react"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: "Python", level: 95 },
      { name: "React", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "Node.js", level: 85 },
      { name: "Django", level: 80 },
      { name: "GraphQL", level: 75 },
    ],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    skills: [
      { name: "Android", level: 80 },
      { name: "iOS", level: 75 },
      { name: "Flutter", level: 85 },
    ],
  },
  {
    title: "Backend & Databases",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "Firebase", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 92 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: <Brain className="h-6 w-6" />,
    skills: [
      { name: "Generative AI", level: 90 },
      { name: "OpenAI API", level: 95 },
      { name: "Fine-tuning models", level: 85 },
    ],
  },
  {
    title: "Project Management",
    icon: <Users className="h-6 w-6" />,
    skills: [
      { name: "Team leadership", level: 90 },
      { name: "Agile development", level: 85 },
      { name: "Client communications", level: 95 },
    ],
  },
  {
    title: "UI/UX Tools",
    icon: <Palette className="h-6 w-6" />,
    skills: [
      { name: "Figma", level: 80 },
      { name: "Qt", level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          <span className="section-highlight">Core</span>
          <span>Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-sky-100 p-3 rounded-lg text-sky-600">{category.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-700">{skill.name}</span>
                      <span className="text-sky-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-sky-400 to-blue-500 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
