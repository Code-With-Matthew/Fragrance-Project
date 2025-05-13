import { getCurrentUser } from '@/lib/auth'
import DashboardLayout from '@/components/layouts/DashboardLayout'
import { redirect } from 'next/navigation'

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()
  
  if (!user) {
    redirect('/auth/login?callbackUrl=/protected/dashboard')
  }

  return <DashboardLayout>{children}</DashboardLayout>
}