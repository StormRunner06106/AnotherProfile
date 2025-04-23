"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

const gradientButtonVariants = cva(
  "relative overflow-hidden transition-all duration-300 hover:shadow-lg focus:ring-2 focus:ring-offset-2 focus:ring-slate-700",
  {
    variants: {
      gradient: {
        default: "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white border-0",
        secondary:
          "bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white border-0",
        accent:
          "bg-gradient-to-r from-sky-400/80 to-sky-600/80 backdrop-blur-sm hover:from-sky-500/80 hover:to-sky-700/80 text-white border-0",
        subtle:
          "bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm hover:from-slate-700/70 hover:to-slate-800/70 text-white border-0",
        glow: "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white border-0 shadow-[0_0_15px_rgba(56,189,248,0.5)] hover:shadow-[0_0_25px_rgba(56,189,248,0.7)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      gradient: "default",
      size: "default",
    },
  },
)

export interface GradientButtonProps
  extends Omit<ButtonProps, "variant">,
    VariantProps<typeof gradientButtonVariants> {}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, gradient, size, ...props }, ref) => {
    return <Button className={cn(gradientButtonVariants({ gradient, size, className }))} ref={ref} {...props} />
  },
)
GradientButton.displayName = "GradientButton"

export { GradientButton }
