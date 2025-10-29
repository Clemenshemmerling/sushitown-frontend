import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useAuth } from '../../state/auth.jsx'

const linkClass = ({ isActive }) => `px-3 py-2 rounded-lg hover:bg-black/5 ${isActive ? 'bg-black/10' : ''}`

const MobileMenu = ({ open, onClose }) => {
  const { isAuth, logout } = useAuth()
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="fixed inset-0 z-40 bg-black/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} />
          <motion.div className="fixed inset-x-0 top-14 z-50 bg-sushi-paper shadow-soft border-t" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.18, ease: 'easeOut' }}>
            <div className="mx-auto max-w-6xl px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="font-black text-sushi-ink">Menú</div>
                <button aria-label="Cerrar menú" className="p-2 rounded-lg hover:bg-black/5 text-sushi-ink" onClick={onClose}>
                  <X size={22} />
                </button>
              </div>
              <div className="mt-3 grid gap-2 text-sushi-ink">
                <NavLink to="/" className={linkClass} onClick={onClose}>Inicio</NavLink>
                <NavLink to="/menu" className={linkClass} onClick={onClose}>Menú</NavLink>
                <NavLink to="/cart" className={linkClass} onClick={onClose}>Carrito</NavLink>
                <NavLink to="/orders" className={linkClass} onClick={onClose}>Mis pedidos</NavLink>
              </div>
              <div className="mt-4 border-t pt-3 grid gap-2">
                {!isAuth && <NavLink to="/login" className={linkClass} onClick={onClose}>Login</NavLink>}
                {!isAuth && <NavLink to="/register" className={linkClass} onClick={onClose}>Registrarse</NavLink>}
                {isAuth && <button onClick={() => { logout(); onClose() }} className="px-3 py-2 text-left rounded-lg hover:bg-black/5">Salir</button>}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu
