'use client'
import { useEffect } from 'react'

type ToastType = 'success' | 'error' | 'info'

interface ToastProps {
  message: string
  type?: ToastType
  onClose: () => void
  duration?: number
}

export const Toast = ({ 
  message, 
  type = 'info', 
  onClose, 
  duration = 3000 
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  const typeStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`${typeStyles[type]} text-white px-6 py-3 rounded-lg shadow-lg`}>
        {message}
      </div>
    </div>
  )
}