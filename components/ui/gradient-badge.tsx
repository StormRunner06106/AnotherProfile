import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Badge, type BadgeProps } from "@/components/ui/badge"

const gradientBadgeVariants = cva(
  "transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      gradient: {
        default: "bg-gradient-to-r from-sky-500 to-blue-600 text-white border-0",
        secondary: "bg-gradient-to-r from-slate-700 to-slate-800 text-white border-0",
        accent: "bg-gradient-to-r from-sky-400/80 to-sky-600/80 backdrop-blur-sm text-white border-0",
        subtle: "bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm text-white border-0",
        glow: "bg-gradient-to-r from-sky-500 to-blue-600 text-white border-0 shadow-[0_0_10px_rgba(56,189,248,0.5)]",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      gradient: "default",
      size: "default",
    },
  },
)

export interface GradientBadgeProps extends Omit<BadgeProps, "variant">, VariantProps<typeof gradientBadgeVariants> {}

const GradientBadge = React.forwardRef<HTMLDivElement, GradientBadgeProps>(
  ({ className, gradient, size, ...props }, ref) => {
    return <Badge className={cn(gradientBadgeVariants({ gradient, size, className }))} ref={ref} {...props} />
  },
)
GradientBadge.displayName = "GradientBadge"

export { GradientBadge }
