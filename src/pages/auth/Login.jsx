import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAuth } from '../../state/auth.jsx'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { login } = useAuth()
  const nav = useNavigate()
  const { state } = useLocation()

  const onSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await login(email, password)
      nav(state?.from?.pathname || '/')
    } catch {
      setError('Credenciales inválidas')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-md grid gap-4 rounded-2xl p-6 bg-sushi-paper shadow-soft">
      <h1 className="text-2xl font-black text-sushi-ink">Iniciar sesión</h1>
      <form onSubmit={onSubmit} className="grid gap-3">
        <input className="rounded-xl border p-3" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="rounded-xl border p-3" placeholder="Contraseña" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button disabled={loading} className="rounded-xl bg-sushi-ink text-white py-3 disabled:opacity-50">{loading?'Entrando...':'Entrar'}</button>
      </form>
      <p className="text-sm">¿No tienes cuenta? <Link className="underline" to="/register">Regístrate</Link></p>
    </section>
  )
}

export default Login
