import { NavLink } from 'react-router-dom'
import AccountMenu from './AccountMenu.jsx'

const linkClass = ({ isActive }) => `px-3 py-2 rounded-lg hover:bg-white/50 ${isActive ? 'bg-white/60' : ''}`

const DesktopNav = () => {
  return (
    <nav className="ml-auto hidden md:flex items-center gap-4 text-sushi-ink">
      <NavLink to="/" className={linkClass}>Inicio</NavLink>
      <NavLink to="/menu" className={linkClass}>Menú</NavLink>
      <NavLink to="/cart" className={linkClass}>Carrito</NavLink>
      <AccountMenu />
    </nav>
  )
}

export default DesktopNav
