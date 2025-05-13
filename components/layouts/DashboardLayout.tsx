'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-4">
        <nav className="space-y-2">
          <Link 
            href="/protected/dashboard" 
            className="block p-2 hover:bg-gray-800 rounded"
          >
            Dashboard
          </Link>
          <Link
            href="/protected/orders"
            className="block p-2 hover:bg-gray-800 rounded"
          >
            Orders
          </Link>
          <Link
            href="/protected/profile"
            className="block p-2 hover:bg-gray-800 rounded"
          >
            Profile
          </Link>
          <button
            onClick={() => signOut()}
            className="w-full text-left p-2 hover:bg-gray-800 rounded"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50">
        {children}
      </main>
    </div>
  )
}