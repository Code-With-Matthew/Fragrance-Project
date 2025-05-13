import type { IconName } from '@/components/ui/Icon'

export const NAV_LINKS = [
  { name: 'Home', href: '/', icon: 'home' as IconName },
  { name: 'About Us', href: '/about', icon: 'user' as IconName },
  { name: 'Products', href: '/products', icon: 'cart' as IconName },
  { name: 'Blog', href: '/blog', icon: 'file-text' as IconName },
  { name: 'Contact', href: '/contact', icon: 'mail' as IconName },
] as const

export const FOOTER_LINKS = {
  quickLinks: [
    { name: 'Find a Preview', href: '/preview' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Contact', href: '/contact' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Blog', href: '/blog' },
  ],
}

export const SOCIAL_MEDIA = [
  { name: 'Facebook', icon: 'facebook' as IconName, href: '#' },
  { name: 'Instagram', icon: 'instagram' as IconName, href: '#' },
  { name: 'Twitter', icon: 'twitter' as IconName, href: '#' },
]

export const PRODUCTS = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  title: `Lorem Ipsum is simply dummy text of the printing ${index + 1}`,
  price: 140.00,
  imageUrl: '/placeholder-product.jpg',
  slug: `product-${index + 1}`
}))

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING',
    author: 'Oud-Swet',
    date: 'March 07, 2017',
    excerpt: 'Lorem Ipsum is simply dummy text of printing & typesetting industry.',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit...`,
    slug: 'lorem-ipsum-is-simply-dummy-text-of-the-printing'
  },
] as const