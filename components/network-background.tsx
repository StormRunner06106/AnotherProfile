"use client"

import { useEffect, useRef } from "react"

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const points: { x: number; y: number; z: number }[] = []
    const numPoints = 60
    const focalLength = 300
    const perspective = focalLength / 1000

    for (let i = 0; i < numPoints; i++) {
      const x = Math.random() * canvas.width - canvas.width / 2
      const y = Math.random() * canvas.height - canvas.height / 2
      const z = Math.random() * 1000 - 500
      points.push({ x, y, z })
    }

    const updatePoints = () => {
      for (const point of points) {
        point.z -= 2
        if (point.z < -focalLength) {
          point.z = 500
        }
      }
    }

    const drawPoints = () => {
      ctx.fillStyle = "rgba(56, 189, 248, 0.5)"
      for (const point of points) {
        const scale = focalLength / (focalLength + point.z)
        const x = point.x * scale + canvas.width / 2
        const y = point.y * scale + canvas.height / 2
        ctx.beginPath()
        ctx.arc(x, y, 2 * scale, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const drawLines = () => {
      ctx.strokeStyle = "rgba(56, 189, 248, 0.2)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const p1 = points[i]
          const p2 = points[j]

          const scale1 = focalLength / (focalLength + p1.z)
          const x1 = p1.x * scale1 + canvas.width / 2
          const y1 = p1.y * scale1 + canvas.height / 2

          const scale2 = focalLength / (focalLength + p2.z)
          const x2 = p2.x * scale2 + canvas.width / 2
          const y2 = p2.y * scale2 + canvas.height / 2

          const distanceThreshold = 200

          const dx = x2 - x1
          const dy = y2 - y1
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < distanceThreshold) {
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      updatePoints()
      drawLines()
      drawPoints()
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" style={{ pointerEvents: "none" }} />
}
