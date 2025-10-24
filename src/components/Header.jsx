import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

const Header = () => {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg hover:bg-white/50 ${isActive ? 'bg-white/60' : ''}`

  return (
    <header className="sticky top-0 z-50 bg-sushi-paper backdrop-blur-sm shadow-soft">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <div className="font-black tracking-wide text-sushi-ink text-xl">Sushitown</div>

        <nav className="ml-auto hidden md:flex items-center gap-4 text-sushi-ink">
          <NavLink to="/" className={linkClass}>Inicio</NavLink>
          <NavLink to="/menu" className={linkClass}>Menú</NavLink>
          <NavLink to="/cart" className={linkClass}>Carrito</NavLink>
          <NavLink to="/orders" className={linkClass}>Mis pedidos</NavLink>
        </nav>

        <button
          aria-label="Abrir menú"
          className="ml-auto md:hidden p-2 rounded-lg hover:bg-white/50 text-sushi-ink"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute inset-x-0 top-full z-50 bg-sushi-paper backdrop-blur-sm shadow-soft border-t"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
            >
              <div className="mx-auto max-w-6xl px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="font-black text-sushi-ink">Menú</div>
                  <button
                    aria-label="Cerrar menú"
                    className="p-2 rounded-lg hover:bg-white/50 text-sushi-ink"
                    onClick={() => setOpen(false)}
                  >
                    <X size={22} />
                  </button>
                </div>
                <div className="mt-3 grid gap-2 text-sushi-ink">
                  <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Inicio</NavLink>
                  <NavLink to="/menu" className={linkClass} onClick={() => setOpen(false)}>Menú</NavLink>
                  <NavLink to="/cart" className={linkClass} onClick={() => setOpen(false)}>Carrito</NavLink>
                  <NavLink to="/orders" className={linkClass} onClick={() => setOpen(false)}>Mis pedidos</NavLink>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
