export type Product = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  description?: string;
  category?: string;
};

export type BlogPost = {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content?: string;
  slug?: string;
};

export type CartItem = Product & {
  quantity: number;
};

export type NavigationLink = {
  name: string;
  href: string;
};