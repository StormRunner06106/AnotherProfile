"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Github, Linkedin, Twitter, Facebook } from "lucide-react"
import ThemeToggle from "@/components/download-resume"
import DownloadResume from "@/components/download-resume"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-auto h-auto rounded-full overflow-hidden">
            <Image
              src="/165153784.jfif"
              alt="Lucas Taylor"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold text-slate-800">Portfolio</span>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-slate-700 hover:text-sky-600 transition-colors">
            Home
          </a>
          <a href="#about" className="text-slate-700 hover:text-sky-600 transition-colors">
            About
          </a>
          <a href="#skills" className="text-slate-700 hover:text-sky-600 transition-colors">
            Skills
          </a>
          <a href="#experience" className="text-slate-700 hover:text-sky-600 transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-slate-700 hover:text-sky-600 transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-slate-700 hover:text-sky-600 transition-colors">
            Contact
          </a>
        </div>

        {/* Social links */}
        <div className="hidden md:flex items-center gap-4">
          <DownloadResume />
          <a
            href="https://github.com/StormRunner06106"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61566675516408"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
          <a
            href="https://bsky.app/profile/stormrunner06106.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <DownloadResume />
          <button
            className="text-slate-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a href="#" className="text-slate-700 py-2 hover:text-sky-600" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#about" className="text-slate-700 py-2 hover:text-sky-600" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#skills" className="text-slate-700 py-2 hover:text-sky-600" onClick={() => setIsOpen(false)}>
              Skills
            </a>
            <a href="#experience" className="text-slate-700 py-2 hover:text-sky-600" onClick={() => setIsOpen(false)}>
              Experience
            </a>
            <a href="#projects" className="text-slate-700 py-2 hover:text-sky-600" onClick={() => setIsOpen(false)}>
              Projects
            </a>
            <a href="#contact" className="text-slate-700 py-2 hover:text-sky-600" onClick={() => setIsOpen(false)}>
              Contact
            </a>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61566675516408"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://bsky.app/profile/stormrunner06106.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
