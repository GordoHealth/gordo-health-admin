import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FieldErrorProps {
  message?: string
  id?: string
  className?: string
}

export function FieldError({ message, id, className }: FieldErrorProps) {
  if (!message) return null

  return (
    <p
      id={id}
      role="alert"
      className={cn("flex items-center gap-1.5 text-sm text-destructive", className)}
    >
      <AlertCircle className="size-4 shrink-0" />
      {message}
    </p>
  )
}
