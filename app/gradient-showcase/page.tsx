import GradientDemo from "@/components/gradient-demo"
import NetworkBackground from "@/components/network-background"

export default function GradientShowcasePage() {
  return (
    <main className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      <NetworkBackground />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Gradient UI Components</h1>
        <GradientDemo />
      </div>
    </main>
  )
}
