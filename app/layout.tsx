import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oud-Swet Store',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          
          <main className="flex-1">
            {children}
          </main>
          
          <Footer />
        </div>
      </body>
    </html>
  )
}