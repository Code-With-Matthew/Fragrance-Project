'use client'

import Link from 'next/link'
import { Loader } from '../ui/Loader'

interface AuthFormWrapperProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  footerText: string
  footerLink: string
  footerLinkText: string
  error?: string | null
  loading?: boolean
}

export const AuthFormWrapper = ({
  title,
  subtitle,
  children,
  footerText,
  footerLink,
  footerLinkText,
  error,
  loading
}: AuthFormWrapperProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
            <Loader />
          </div>
        )}
        
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {subtitle && (
            <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
          )}
        </div>

        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-md">
            {error}
          </div>
        )}

        <div className="mt-8 space-y-6">
          {children}
        </div>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">{footerText}</span>{' '}
          <Link
            href={footerLink}
            className="font-medium text-primary hover:text-primary-dark"
          >
            {footerLinkText}
          </Link>
        </div>
      </div>
    </div>
  )
}