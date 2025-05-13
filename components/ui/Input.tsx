import React from 'react'
import { cn } from '@/lib/utils' 

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  className?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label 
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        
        <input
          ref={ref}
          {...props}
          className={cn(
            'block w-full rounded-md border-gray-300 shadow-sm',
            'focus:border-primary focus:ring focus:ring-primary/50',
            'transition duration-200',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-200',
            props.disabled && 'bg-gray-100 cursor-not-allowed',
            className
          )}
        />
        
        {error && (
          <p className="text-sm text-red-600 mt-1">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }