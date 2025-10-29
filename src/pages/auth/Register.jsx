import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../state/auth.jsx'
import Loader from '../../components/ui/Loader.jsx'
import PageSection from '../../components/ui/PageSection.jsx'
import TextInput from '../../components/ui/TextInput.jsx'
import PrimaryButton from '../../components/ui/PrimaryButton.jsx'

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
    <PageSection title='Crear Cuenta' max='max-w-4xl'>
      <form onSubmit={onSubmit} className='grid gap-4 md:grid-cols-2'>
        <TextInput className='col-span-2 md:col-span-1' placeholder='Nombre' value={name} onChange={e=>setName(e.target.value)} />
        <TextInput className='col-span-2 md:col-span-1' placeholder='Email' type='email' value={email} onChange={e=>setEmail(e.target.value)} />
        <TextInput className='col-span-2 md:col-span-1' placeholder='Contraseña' type='password' value={password} onChange={e=>setPassword(e.target.value)} />
        <TextInput className='col-span-2 md:col-span-1' placeholder='Teléfono' value={phone} onChange={e=>setPhone(e.target.value)} />
        <TextInput className='col-span-2 md:col-span-1' placeholder='Dirección' value={addressLine1} onChange={e=>setAddressLine1(e.target.value)} />
        <TextInput className='col-span-2 md:col-span-1' placeholder='Dirección 2 (opcional)' value={addressLine2} onChange={e=>setAddressLine2(e.target.value)} />
        <TextInput className='col-span-2 md:col-span-1' placeholder='Ciudad' value={city} onChange={e=>setCity(e.target.value)} />
        {error && <p className='text-[#FFD000] text-sm font-bold col-span-2 drop-shadow-[0_1px_1px_#000]'>{error}</p>}
        <PrimaryButton type='submit' disabled={loading} className='col-span-2'>
          {loading ? <Loader size={28} /> : 'Crear Cuenta'}
        </PrimaryButton>
      </form>
      <p className='text-sm text-center text-white mt-2'>
        ¿Ya tienes cuenta? <Link className='font-black text-[#FFD000] underline hover:text-yellow-400 transition-colors' to='/login'>Entrar</Link>
      </p>
    </PageSection>
  )
}

export default Register
