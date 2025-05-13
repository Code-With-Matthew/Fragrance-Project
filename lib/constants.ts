export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
] as const;

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
};

export const SOCIAL_MEDIA = [
  { name: 'Facebook', icon: 'facebook', href: '#' },
  { name: 'Instagram', icon: 'instagram', href: '#' },
  { name: 'Twitter', icon: 'twitter', href: '#' },
];

export const PRODUCTS = Array(8).fill({
  id: 1,
  title: 'Lorem Ipsum is simply dummy text of the printing',
  price: 140.00,
  imageUrl: '/placeholder-product.jpg',
}).map((product, index) => ({
  ...product,
  id: index + 1,
  title: `${product.title} ${index + 1}`,
}));

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING',
    author: 'Oud-Swet',
    date: 'March 07, 2017',
    excerpt: 'Lorem Ipsum is simply dummy text of printing & typesetting industry.',
    content: `Lorem ipsum dolor sit amet... (full content here)`,
    slug: 'lorem-ipsum-is-simply-dummy-text-of-the-printing'
  },
  // Add more posts as needed
];