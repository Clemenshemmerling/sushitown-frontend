import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { User } from 'lucide-react'
import { useAuth } from '../../state/auth.jsx'

const AccountMenu = () => {
  const { isAuth, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const item = 'px-3 py-2 rounded-lg hover:bg-black/5'

  return (
    <div className="relative">
      <button onClick={() => setOpen(v => !v)} className="px-3 py-2 rounded-lg hover:bg-white/50 text-sushi-ink flex items-center gap-2">
        <User size={18} />
        <span className="hidden lg:inline">Cuenta</span>
      </button>

      {open && (
        <>
          <button aria-hidden className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 z-50 mt-2 w-56 rounded-xl border border-sushi-gold bg-sushi-paper text-sushi-ink shadow-soft p-2">
            {!isAuth && (
              <div className="grid gap-2">
                <NavLink to="/login" className={item} onClick={() => setOpen(false)}>Login</NavLink>
                <NavLink to="/register" className={item} onClick={() => setOpen(false)}>Registrarse</NavLink>
              </div>
            )}
            {isAuth && (
              <div className="grid gap-2">
                <NavLink to="/orders" className={item} onClick={() => setOpen(false)}>Mis pedidos</NavLink>
                <button onClick={() => { logout(); setOpen(false) }} className="px-3 py-2 text-left rounded-lg hover:bg-black/5">Salir</button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default AccountMenu
