'use client'

import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'
import { Icon, type IconName } from '../ui/Icon'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed bottom-4 right-4 z-50 p-3 bg-black text-white rounded-full shadow-lg"
      >
        <Icon name={isSidebarOpen ? 'close' : 'menu'} className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <aside className={`fixed md:relative md:translate-x-0 z-40 h-full w-64 bg-gray-900 text-white p-4 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between mb-8">
          <Link href="/" className="text-xl font-bold">
            Oud-Swet
          </Link>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden p-2 hover:bg-gray-800 rounded"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="space-y-2">
          {[
            { href: '/protected/dashboard', label: 'Dashboard', icon: 'user' as IconName },
            { href: '/protected/orders', label: 'Orders', icon: 'cart' as IconName },
            { href: '/protected/profile', label: 'Profile', icon: 'user' as IconName },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center p-2 hover:bg-gray-800 rounded gap-2"
            >
              <Icon name={link.icon} className="h-5 w-5" />
              {link.label}
            </Link>
          ))}
          
          <button
            onClick={() => signOut()}
            className="w-full flex items-center p-2 hover:bg-gray-800 rounded gap-2"
          >
            <Icon name="arrow-right" className="h-5 w-5" />
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-50 relative">
        {/* Overlay untuk mobile */}
        <div
          className={`md:hidden fixed inset-0 bg-black/50 z-30 transition-opacity ${
            isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsSidebarOpen(false)}
        />
        {children}
      </main>
    </div>
  )
}