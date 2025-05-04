import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import BackToTop from "@/components/back-to-top"
import BubbleBackground from "@/components/bubble-background"
import Posts from "@/components/posts"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-slate-800 overflow-hidden">
      <BubbleBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="container mx-auto px-4 py-8 space-y-24">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Posts />
          <Contact />
        </div>
        <BackToTop />
      </div>
    </main>
  )
}
