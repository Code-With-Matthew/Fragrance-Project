'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="animate-pageIn">
      <Header />
      {children}
      <Footer />
    </div>
  )
}