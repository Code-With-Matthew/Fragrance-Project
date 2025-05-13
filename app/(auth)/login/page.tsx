// app/(auth)/login/page.tsx
'use client'

import { AuthFormWrapper } from '@/components/auth/AuthFormWrapper'
import { SocialButtons } from '@/components/auth/SocialButtons'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { Input } from '@/components/ui'
import { Button } from '@/components/ui'
import { useState } from 'react'

interface LoginFormData {
  email: string
  password: string
}

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>()

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true)
      const result = await signIn('credentials', {
        ...data,
        redirect: false
      })
      
      if (result?.error) {
        throw new Error(result.error)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthFormWrapper
      title="Masuk ke Akun Anda"
      subtitle="Selamat datang kembali! Silakan masuk untuk melanjutkan"
      footerText="Belum punya akun?"
      footerLink="/auth/register"
      footerLinkText="Daftar disini"
      error={error}
      loading={loading}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Email"
          type="email"
          error={errors.email?.message}
          {...register('email', { 
            required: 'Email wajib diisi',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Format email tidak valid'
            }
          })}
        />
        
        <Input
          label="Password"
          type="password"
          error={errors.password?.message}
          {...register('password', { 
            required: 'Password wajib diisi',
            minLength: {
              value: 6,
              message: 'Password minimal 6 karakter'
            }
          })}
        />

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary-dark"
          disabled={loading}
        >
          Masuk
        </Button>

        <SocialButtons providers={['google', 'github']} loading={loading} />
      </form>
    </AuthFormWrapper>
  )
}