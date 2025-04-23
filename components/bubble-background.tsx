"use client"

import { useEffect, useRef } from "react"

export default function BubbleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 3 // Make it taller to cover the entire page
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Bubble class
    class Bubble {
      x: number
      y: number
      radius: number
      speed: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.radius = Math.random() * 60 + 20 // Larger bubbles
        this.speed = Math.random() * 0.2 + 0.05 // Slower movement
        this.opacity = Math.random() * 0.3 + 0.1 // Lower opacity for light theme
      }

      update() {
        // Very subtle movement
        this.y -= this.speed
        this.x += Math.sin(this.y * 0.01) * 0.2

        // Reset bubble when it goes off screen
        if (this.y < -this.radius * 2) {
          this.y = canvas.height + this.radius
          this.x = Math.random() * canvas.width
          this.radius = Math.random() * 60 + 20
        }
      }

      draw() {
        // Create gradient for bubble - lighter colors for light theme
        const gradient = ctx!.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)

        gradient.addColorStop(0, `rgba(56, 189, 248, ${this.opacity * 0.7})`) // Lighter center
        gradient.addColorStop(1, `rgba(37, 99, 235, ${this.opacity * 0.5})`) // Darker edge

        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx!.fillStyle = gradient
        ctx!.fill()

        // Add subtle highlight
        ctx!.beginPath()
        ctx!.arc(this.x - this.radius * 0.2, this.y - this.radius * 0.2, this.radius * 0.1, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.7})`
        ctx!.fill()
      }
    }

    // Create bubbles - fewer, larger bubbles
    const bubbleCount = 25
    const bubbles: Bubble[] = []
    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble())
    }

    // Animation loop
    function animate() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height)

      // Light background
      ctx!.fillStyle = "#ffffff" // White background
      ctx!.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw bubbles
      bubbles.forEach((bubble) => {
        bubble.update()
        bubble.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" style={{ pointerEvents: "none" }} />
}
