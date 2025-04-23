"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

export default function LightDarkToggle({ className = "" }) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      // Set initial state based on user preference or default to dark
      const savedTheme = localStorage.getItem("theme")
      setIsDark(savedTheme === "dark" || !savedTheme)

      // Apply the theme
      applyTheme(savedTheme === "dark" || !savedTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)

    // Save preference
    localStorage.setItem("theme", newIsDark ? "dark" : "light")

    // Apply the theme
    applyTheme(newIsDark)
  }

  const applyTheme = (dark) => {
    // This is a simplified version - in a real app, you'd apply CSS variables or classes
    // For this demo, we'll just change the contact section's appearance
    const contactCards = document.querySelectorAll("#contact .rounded-2xl")

    contactCards.forEach((card) => {
      if (dark) {
        card.classList.remove("bg-white/90")
        card.classList.add("bg-slate-800/40")

        // Update text colors inside this card
        card.querySelectorAll("h3, h4").forEach((el) => {
          el.classList.remove("text-gray-800")
          el.classList.add("text-white")
        })

        card.querySelectorAll("p, label").forEach((el) => {
          el.classList.remove("text-gray-700", "text-gray-600")
          el.classList.add("text-gray-300")
        })
      } else {
        card.classList.remove("bg-slate-800/40")
        card.classList.add("bg-white/90")

        // Update text colors inside this card
        card.querySelectorAll("h3, h4").forEach((el) => {
          el.classList.remove("text-white")
          el.classList.add("text-gray-800")
        })

        card.querySelectorAll("p, label").forEach((el) => {
          el.classList.remove("text-gray-300")
          el.classList.add("text-gray-700")
        })
      }
    })
  }

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors duration-200 ${
        isDark ? "bg-slate-700 text-yellow-300 hover:bg-slate-600" : "bg-sky-100 text-sky-600 hover:bg-sky-200"
      } ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
