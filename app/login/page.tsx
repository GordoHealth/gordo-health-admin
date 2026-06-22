import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { LoginForm } from "@/components/auth/LoginForm"

export default async function LoginPage() {
  const cookieStore = await cookies()
  const cookieName = process.env.SESSION_COOKIE_NAME ?? "gordo_session"
  const sessionCookie = cookieStore.get(cookieName)

  if (sessionCookie?.value) {
    redirect("/dashboard")
  }

  return (
    <div className="flex items-center justify-center py-16 px-4">
      <LoginForm />
    </div>
  )
}
