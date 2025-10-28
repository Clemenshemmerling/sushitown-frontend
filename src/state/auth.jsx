import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { loginRequest, registerRequest, logoutRequest } from '../services/auth'
import { setToken as setTokenSvc } from '../services/token'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [user, setUser] = useState(() => {
    const raw = localStorage.getItem('user')
    return raw ? JSON.parse(raw) : null
  })

  useEffect(() => {
    if (token) localStorage.setItem('token', token)
    else localStorage.removeItem('token')
  }, [token])

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user))
    else localStorage.removeItem('user')
  }, [user])

  const login = async (email, password) => {
    const data = await loginRequest(email, password)
    setToken(data.token)
    setTokenSvc(data.token)
    setUser(data.user)
    return data
  }

  const register = async (payload) => {
    const data = await registerRequest(payload)
    setToken(data.token)
    setTokenSvc(data.token)
    setUser(data.user)
    return data
  }

  const logout = async () => {
    await logoutRequest()
    setToken('')
    setUser(null)
  }

  const value = useMemo(() => ({ token, user, role: user?.role || 'guest', login, register, logout, isAuth: !!token }), [token, user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
