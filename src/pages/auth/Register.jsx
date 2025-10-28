import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../state/auth.jsx'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [addressLine1, setAddressLine1] = useState('')
  const [addressLine2, setAddressLine2] = useState('')
  const [city, setCity] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { register } = useAuth()
  const nav = useNavigate()

  const onSubmit = async e => {
    e.preventDefault()
    if (!phone.trim() || !addressLine1.trim()) {
      setError('Teléfono y dirección son obligatorios')
      return
    }
    setLoading(true)
    setError('')
    try {
      await register({ name, email, password, phone, addressLine1, addressLine2, city })
      nav('/')
    } catch {
      setError('No se pudo registrar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="mx-auto max-w-md grid gap-4 rounded-2xl p-6 bg-sushi-paper shadow-soft">
      <h1 className="text-2xl font-black text-sushi-ink">Crear cuenta</h1>
      <form onSubmit={onSubmit} className="grid gap-3">
        <input className="rounded-xl border p-3" placeholder="Nombre" value={name} onChange={e=>setName(e.target.value)} />
        <input className="rounded-xl border p-3" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="rounded-xl border p-3" placeholder="Contraseña" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <input className="rounded-xl border p-3" placeholder="Teléfono" value={phone} onChange={e=>setPhone(e.target.value)} />
        <input className="rounded-xl border p-3" placeholder="Dirección" value={addressLine1} onChange={e=>setAddressLine1(e.target.value)} />
        <input className="rounded-xl border p-3" placeholder="Dirección 2 (opcional)" value={addressLine2} onChange={e=>setAddressLine2(e.target.value)} />
        <input className="rounded-xl border p-3" placeholder="Ciudad" value={city} onChange={e=>setCity(e.target.value)} />
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <button disabled={loading} className="rounded-xl bg-sushi-ink text-white py-3 disabled:opacity-50">{loading?'Creando...':'Crear cuenta'}</button>
      </form>
      <p className="text-sm">¿Ya tienes cuenta? <Link className="underline" to="/login">Entrar</Link></p>
    </section>
  )
}

export default Register
