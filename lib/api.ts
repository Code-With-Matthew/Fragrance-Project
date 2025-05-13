import { PRODUCTS, BLOG_POSTS } from './constants'
import type { Product, BlogPost } from './types'

export const fetchProducts = async (): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return PRODUCTS.map(product => ({
    ...product,
    name: product.title, // Map 'title' to 'name'
  }))
}

export const fetchProductById = async (id: number): Promise<Product | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 500))
  const product = PRODUCTS.find(product => product.id === id)
  return product ? { ...product, name: product.title } : undefined
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  await new Promise(resolve => setTimeout(resolve, 800))
  return BLOG_POSTS.map(post => ({ ...post }))
}