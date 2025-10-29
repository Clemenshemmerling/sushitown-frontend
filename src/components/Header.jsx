import { useState } from 'react'
import { Menu } from 'lucide-react'
import Logo from './Logo.jsx'
import DesktopNav from './nav/DesktopNav.jsx'
import MobileMenu from './nav/MobileMenu.jsx'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-sushi-yellow/95 backdrop-blur supports-[backdrop-filter]:bg-sushi-yellow/85 shadow-soft">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Logo size={36} className="shrink-0" />
        <DesktopNav />
        <button aria-label="Abrir menú" className="ml-auto md:hidden p-2 rounded-lg hover:bg-black/10 text-sushi-ink" onClick={() => setOpen(true)}>
          <Menu size={22} />
        </button>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}

export default Header
