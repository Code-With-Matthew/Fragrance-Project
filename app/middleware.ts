import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const { pathname } = request.nextUrl

  // Redirect unauthenticated users from protected routes
  if (pathname.startsWith('/protected') && !token) {
    return NextResponse.redirect(
      new URL(`/auth/login?callbackUrl=${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}