"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Galler-ai",
    description: "Image generation platform powered by OpenAI",
    url: "https://gallerai.ai",
    stack: ["React", "Node.js", "GraphQL", "Generative AI"],
    details: [
      "Developed a full-stack system to generate high-quality AI images from user prompts.",
      "Optimized AI integration for performance and user interface responsiveness.",
    ],
    category: "AI",
  },
  {
    title: "Bestinform",
    description: "Booking platform for European travelers",
    url: "https://www.bestinform.eu",
    stack: ["Angular", "SpringBoot", "MySQL", "Firebase"],
    details: [
      "Engineered real-time booking features and intelligent recommendation system.",
      "Ensured platform scalability and high availability during peak seasons.",
    ],
    category: "Web",
  },
  {
    title: "Starlink Control System",
    description: "Terminal status tracking system",
    url: "https://www.starlink.com",
    stack: ["WordPress", "Node.js", "MongoDB", "REST API"],
    details: [
      "Designed terminal signal monitoring system to interface with hardware in Alaska.",
      "Enabled remote signal reception and control capabilities for internal teams.",
    ],
    category: "IoT",
  },
  {
    title: "Drivemond Taxi Management Platform",
    description: "All-in-one solution for taxi service management",
    url: "https://drivemond-admin.codemond.com/",
    stack: ["Django", "Flutter", "Laravel", "Figma"],
    details: [
      "Created an all-in-one solution for taxi service management, including passenger and driver apps.",
      "Integrated real-time tracking, payment, and admin dashboard features.",
    ],
    category: "Mobile",
  },
  {
    title: "NBA Data Analysis System",
    description: "Sports analytics tool using OpenAI",
    url: "#",
    stack: ["Python", "OpenAI", "Data Analysis", "Machine Learning"],
    details: [
      "Built a sports analytics tool using OpenAI to process NBA statistics and deliver actionable insights.",
      "Helped users make strategic decisions for fantasy sports and betting platforms.",
    ],
    category: "AI",
  },
  {
    title: "PathFinder – Mineral Geography Analysis",
    description: "AI-based geological analysis platform",
    url: "#",
    stack: ["Python", "Django", "Qt", "Machine Learning"],
    details: [
      "Developed AI-based geological analysis platform to identify and classify mineral systems.",
      "Implemented mathematical algorithms and fine-tuned models using Python and Django with Qt interface.",
    ],
    category: "AI",
  },
]

const categories = ["All", "AI", "Web", "Mobile", "IoT"]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          <span className="section-highlight">Selected</span>
          <span>Projects</span>
        </h2>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === category ? "bg-sky-500 text-white" : "bg-white text-slate-800 hover:bg-sky-100"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="glass-card rounded-2xl h-full flex flex-col hover:shadow-lg transition-shadow duration-300 blur-effect">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
                      <p className="text-slate-600 mt-1">{project.description}</p>
                    </div>
                    <span className="bg-sky-100 text-sky-600 text-xs font-medium px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span key={tech} className="bg-gray-100 text-slate-700 text-xs px-2.5 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-4 flex-grow">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                        <ChevronRight className="h-4 w-4 text-sky-500 mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto p-6 pt-0">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Visit Project</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
