import { apiFetch } from './client'

export type LoginCredentials = {
  email: string
  password: string
}

export type LoginResponse = {
  success: boolean
}

export function loginUser(credentials: LoginCredentials) {
  return apiFetch<LoginResponse>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })
}
