import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const cookieName = process.env.SESSION_COOKIE_NAME ?? "gordo_session"
  const sessionCookie = request.cookies.get(cookieName)
  const isLoggedIn = !!sessionCookie?.value
  const isLoginPage = request.nextUrl.pathname === "/login"

  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  if (!isLoggedIn && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
