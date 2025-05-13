export interface BlogPost {
  id: number
  title: string
  slug: string
  author: string
  content: string
  excerpt: string
  date: string
  featuredImage?: string
  tags?: string[]
}