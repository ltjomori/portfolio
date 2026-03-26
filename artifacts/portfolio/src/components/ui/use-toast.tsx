// Minimal functional toast setup for Contact button
import * as React from "react"

export interface ToastProps {
  title?: string
  description?: string
  duration?: number
}

// Global state for toasts
let toastListener: ((toast: ToastProps) => void) | null = null

export function toast(props: ToastProps) {
  if (toastListener) {
    toastListener(props)
  }
}

export function useToast() {
  return { toast }
}

export function ToasterProvider({ children }: { children: React.ReactNode }) {
  const [currentToast, setCurrentToast] = React.useState<ToastProps | null>(null)

  React.useEffect(() => {
    toastListener = (t) => {
      setCurrentToast(t)
      setTimeout(() => {
        setCurrentToast(null)
      }, t.duration || 3000)
    }
    return () => {
      toastListener = null
    }
  }, [])

  return (
    <>
      {children}
      {currentToast && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-1 p-4 bg-zinc-900 border border-zinc-800 text-white rounded-lg shadow-xl shadow-black/50 animate-in slide-in-from-bottom-5">
          {currentToast.title && <div className="font-semibold text-sm">{currentToast.title}</div>}
          {currentToast.description && <div className="text-sm text-zinc-400">{currentToast.description}</div>}
        </div>
      )}
    </>
  )
}
