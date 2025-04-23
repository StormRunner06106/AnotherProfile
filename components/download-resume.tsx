"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, File } from "lucide-react"

export default function DownloadResume() {

  return (
    <a
      href="/resume.pdf"
      download="/resume.pdf"
      rel="noopener noreferrer"
      title={"Download my resume"}
      className={`p-2 rounded-full transition-colors duration-200 bg-sky-100 text-sky-600 hover:bg-sky-200`}
      aria-label={"Download my resume"}
    >
      <File className="h-5 w-5" />
    </a>
  )
}
