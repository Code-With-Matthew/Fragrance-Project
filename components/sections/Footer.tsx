import { FOOTER_LINKS, SOCIAL_MEDIA } from '@/lib/constants'
import { Icon, IconName } from '../ui/Icon'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-bold mb-4 inline-block">
            Oud-Swet
          </Link>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {FOOTER_LINKS.quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {SOCIAL_MEDIA.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Icon name={social.icon as IconName} className="h-6 w-6" />
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="md:col-span-4 border-t pt-8 mt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Oud-Swet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}