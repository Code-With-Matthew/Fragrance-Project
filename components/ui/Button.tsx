'use client'

import { Icon, type IconName} from './Icon'
import { Loader } from './Loader'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  icon?: IconName
  loading?: boolean
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  secondary: 'bg-secondary text-white hover:bg-secondary-dark',
  outline: 'border-2 border-primary text-primary hover:bg-primary/10',
  ghost: 'text-gray-700 hover:bg-gray-100'
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  icon,
  loading = false,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`
        inline-flex items-center justify-center gap-2 rounded-md 
        font-medium transition-all duration-200 
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
        ${(loading || props.disabled) && 'opacity-75 cursor-not-allowed'}
      `}
    >
      {loading ? (
        <Loader />
      ) : (
        <>
          {icon && <Icon name={icon} className="h-5 w-5" />}
          {children}
        </>
      )}
    </button>
  )
}