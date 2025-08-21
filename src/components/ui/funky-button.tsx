import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const funkyButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-bold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transform active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-fun hover:shadow-bounce hover-bounce",
        secondary: "bg-secondary text-secondary-foreground shadow-fun hover:shadow-bounce hover-bounce",
        accent: "bg-accent text-accent-foreground shadow-fun hover:shadow-bounce hover-bounce",
        success: "bg-success text-success-foreground shadow-fun hover:shadow-bounce hover-bounce",
        fun: "bg-fun text-fun-foreground shadow-fun hover:shadow-bounce hover-bounce",
        outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground shadow-fun hover:shadow-bounce hover-bounce",
        hero: "gradient-rainbow text-white shadow-bounce hover:shadow-glow hover-bounce text-xl px-8 py-4",
        wiggle: "bg-sunshine-yellow text-foreground shadow-fun hover:shadow-bounce wiggle"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2 text-base",
        lg: "h-14 px-8 py-4 text-xl",
        icon: "h-12 w-12"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
)

export interface FunkyButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof funkyButtonVariants> {
  asChild?: boolean
}

const FunkyButton = React.forwardRef<HTMLButtonElement, FunkyButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(funkyButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
FunkyButton.displayName = "FunkyButton"

export { FunkyButton, funkyButtonVariants }