import { useState } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import { useAuth } from '../../state/auth.jsx'
import Loader from '../../components/ui/Loader.jsx'
import PageSection from '../../components/ui/PageSection.jsx'
import TextInput from '../../components/ui/TextInput.jsx'
import PrimaryButton from '../../components/ui/PrimaryButton.jsx'

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
    <PageSection title='Iniciar Sesión' max='max-w-xl'>
      <form onSubmit={onSubmit} className='grid gap-4'>
        <TextInput placeholder='Email' type='email' value={email} onChange={e=>setEmail(e.target.value)} />
        <TextInput placeholder='Contraseña' type='password' value={password} onChange={e=>setPassword(e.target.value)} />
        {error && <p className='text-[#FFD000] text-sm font-bold drop-shadow-[0_1px_1px_#000]'>{error}</p>}
        <PrimaryButton type='submit' disabled={loading}>
          {loading ? <Loader size={28} /> : 'Entrar'}
        </PrimaryButton>
      </form>
      <p className='text-sm text-center text-white mt-2'>
        ¿No tienes cuenta? <Link className='font-black text-[#FFD000] underline hover:text-yellow-400 transition-colors' to='/register'>Regístrate</Link>
      </p>
    </PageSection>
  )
}

export default Login
