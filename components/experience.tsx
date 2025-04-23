"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, GraduationCap } from "lucide-react"

const experiences = [
  {
    company: "Elara AI",
    location: "Australia",
    position: "Senior AI Developer & Team Lead",
    period: "2020 – 2023",
    achievements: [
      "Led development of cutting-edge AI solutions and transitioned to team leadership in 2022.",
      "Built and maintained Galler-ai, a generative image creation platform powered by OpenAI, widely recognized for image quality and stability.",
      "Mentored junior developers and managed project timelines, resulting in improved delivery speed and code quality.",
      "Spearheaded integration of modern AI frameworks into web platforms to enhance user experience and performance.",
    ],
  },
  {
    company: "Freelance Developer",
    location: "",
    position: "Full-stack & AI Application Developer",
    period: "2015 – 2018",
    achievements: [
      "Started career as a freelancer directly after graduation; built a successful portfolio and network of clients.",
      "Developed and delivered a range of full-stack applications across different domains, including booking, transport, and analytics.",
      "Maintained long-term relationships with initial clients, many of whom still entrust key projects.",
      "Overcame early career challenges to establish a top-ranked freelance profile through persistence and quality delivery.",
    ],
  },
]

const education = {
  degree: "Bachelor's Degree",
  field: "Computer Science and AI Engineering",
  institution: "Trent University",
  year: "2015",
  description:
    "My education in Computer Science and AI Engineering provided a strong foundation in both theoretical concepts and practical applications. The program emphasized problem-solving skills, algorithmic thinking, and innovative approaches to software development. I specialized in artificial intelligence and machine learning techniques, which have been instrumental in my professional career developing AI-powered solutions.",
  continuingEducation: [
    "Regularly participate in AI and machine learning workshops and conferences to stay current with emerging technologies.",
    "Completed specialized courses in generative AI, large language models, and computer vision applications.",
    "Actively contribute to open-source AI projects and technical communities to share knowledge and collaborate with peers.",
  ],
}

export default function Experience() {
  return (
    <section id="experience" className="pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">
          <span className="section-highlight">Professional</span>
          <span>Experience</span>
        </h2>

        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-12 gap-8">
                  {/* Timeline dot and line */}
                  <div className="hidden md:block md:col-span-1 relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full">
                      <div className="h-full w-0.5 bg-sky-200"></div>
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                      <div className="h-6 w-6 rounded-full bg-sky-500 border-4 border-white shadow-md"></div>
                    </div>
                  </div>

                  {/* Mobile timeline dot and line */}
                  <div className="absolute left-0 top-0 h-full md:hidden">
                    <div className="h-full w-0.5 bg-sky-200"></div>
                  </div>
                  <div className="absolute left-0 top-0 md:hidden">
                    <div className="h-6 w-6 rounded-full bg-sky-500 border-4 border-white shadow-md"></div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-11">
                    <div className="flex flex-col md:flex-row justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800">{exp.position}</h3>
                        <div className="flex items-center gap-2 text-slate-600 mt-1">
                          <Briefcase size={16} className="text-sky-600" />
                          <span>
                            {exp.company}
                            {exp.location && ` – ${exp.location}`}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sky-600 mt-2 md:mt-0">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mt-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="h-2 w-2 rounded-full bg-sky-400 mt-2"></div>
                          <span className="text-slate-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section - Integrated with Experience */}
        <h2 className="section-title">
          <span className="section-highlight">Education</span>
          <span>& Training</span>
        </h2>

        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-sky-100 p-3 rounded-lg text-sky-600">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-800">{education.degree}</h3>
              <p className="text-slate-700">{education.field}</p>
            </div>
            <div className="ml-auto flex items-center gap-2 text-sky-600">
              <Calendar size={16} />
              <span>
                {education.institution}, {education.year}
              </span>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">{education.description}</p>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-slate-800 mb-3">Continuing Education</h4>
            <ul className="space-y-3">
              {education.continuingEducation.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-sky-400 mt-2"></div>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
