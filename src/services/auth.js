import http from './http'
import { setToken } from './token'

export const loginRequest = async (email, password) => {
  const r = await http.post('/auth/login', { email, password })
  setToken(r.data.token)
  return r.data
}

export const registerRequest = async (payload) => {
  const r = await http.post('/auth/register', payload)
  setToken(r.data.token)
  return r.data
}

export const logoutRequest = async () => {
  setToken('')
  return true
}
