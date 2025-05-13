import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import type { User } from './types'

export const getCurrentUser = async (): Promise<User | null> => {
  const session = await getServerSession(authOptions)
  return session?.user || null
}

export const protectPage = async () => {
  const user = await getCurrentUser()
  if (!user) redirect('/auth/login')
  return user
}

export const checkAdminAccess = async () => {
  const user = await protectPage()
  if (user?.role !== 'admin') redirect('/')
  return user
}

interface AuthGuardOptions {
  requireAdmin?: boolean
}

export const withAuth = (options?: AuthGuardOptions) => async () => {
  try {
    const user = options?.requireAdmin 
      ? await checkAdminAccess() 
      : await protectPage()
    return { props: { user } }
  } catch {
    return { redirect: { destination: '/auth/login', permanent: false } }
  }
}