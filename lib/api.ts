import { PRODUCTS, BLOG_POSTS } from './constants';

export const fetchProducts = async (): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return PRODUCTS;
};

export const fetchProductById = async (id: number): Promise<Product | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return PRODUCTS.find(product => product.id === id);
};

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return BLOG_POSTS;
};