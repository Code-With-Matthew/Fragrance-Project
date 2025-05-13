'use client'

import Link from 'next/link'
import { NAV_LINKS } from '@/lib/constants'
import { Icon } from '../ui/Icon'
import { useState } from 'react'
import { Button } from '../ui/Button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <Icon name="menu" className="h-6 w-6 md:hidden" />
          Oud-Swet
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <Icon name={link.icon} className="h-5 w-5" />
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          icon={isMenuOpen ? 'close' : 'menu'}
        />

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}>
          <nav className="p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-2 hover:bg-gray-100 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}