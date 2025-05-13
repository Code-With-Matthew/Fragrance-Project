import { FOOTER_LINKS, SOCIAL_MEDIA } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Oud-Swet</h3>
          <p className="text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {FOOTER_LINKS.quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-600 hover:text-primary">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-medium mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {SOCIAL_MEDIA.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-gray-600 hover:text-primary"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}