export interface User {
  id: string
  name?: string
  email: string
  image?: string
  role?: 'user' | 'admin'
}

export interface LoginFormData {
  email: string
  password: string
}

export interface RegisterFormData extends LoginFormData {
  name: string
}