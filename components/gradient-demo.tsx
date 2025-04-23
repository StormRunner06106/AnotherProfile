"use client"

import { GradientButton } from "@/components/ui/gradient-button"
import { GradientBadge } from "@/components/ui/gradient-badge"

export default function GradientDemo() {
  return (
    <div className="p-8 space-y-8 bg-slate-800/40 backdrop-blur-md rounded-2xl shadow-lg border border-slate-700/50">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Gradient Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <GradientButton gradient="default">Default</GradientButton>
          <GradientButton gradient="secondary">Secondary</GradientButton>
          <GradientButton gradient="accent">Accent</GradientButton>
          <GradientButton gradient="subtle">Subtle</GradientButton>
          <GradientButton gradient="glow">Glow Effect</GradientButton>
        </div>

        <div className="flex flex-wrap gap-4">
          <GradientButton gradient="default" size="sm">
            Small
          </GradientButton>
          <GradientButton gradient="default">Default</GradientButton>
          <GradientButton gradient="default" size="lg">
            Large
          </GradientButton>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white">Gradient Badges</h2>
        <div className="flex flex-wrap gap-4">
          <GradientBadge gradient="default">Default</GradientBadge>
          <GradientBadge gradient="secondary">Secondary</GradientBadge>
          <GradientBadge gradient="accent">Accent</GradientBadge>
          <GradientBadge gradient="subtle">Subtle</GradientBadge>
          <GradientBadge gradient="glow">Glow Effect</GradientBadge>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <GradientBadge gradient="default" size="sm">
            Small
          </GradientBadge>
          <GradientBadge gradient="default">Default</GradientBadge>
          <GradientBadge gradient="default" size="lg">
            Large
          </GradientBadge>
        </div>
      </div>
    </div>
  )
}
