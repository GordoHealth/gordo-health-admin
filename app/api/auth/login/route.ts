import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const { email, password } = await request.json()

  const authUrl = `${process.env.AUTH_BASE_URL}${process.env.AUTH_LOGIN_PATH}`
  const cookieName = process.env.SESSION_COOKIE_NAME ?? "gordo_session"

  let microserviceRes: Response
  try {
    microserviceRes = await fetch(authUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
  } catch {
    return NextResponse.json(
      { message: "Unable to reach the server. Check your connection." },
      { status: 500 }
    )
  }

  const data = await microserviceRes.json().catch(() => ({}))

  if (microserviceRes.status === 200) {
    const response = NextResponse.json({ ok: true }, { status: 200 })
    response.cookies.set(cookieName, data.token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    })
    return response
  }

  if (microserviceRes.status === 401) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    )
  }

  if (microserviceRes.status >= 400 && microserviceRes.status < 500) {
    return NextResponse.json(
      { message: (data as { message?: string }).message ?? "An error occurred. Please try again." },
      { status: microserviceRes.status }
    )
  }

  return NextResponse.json(
    { message: "Something went wrong. Please try again." },
    { status: 500 }
  )
}
