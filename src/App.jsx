import { Routes, Route, NavLink } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import Landing from './pages/Landing.jsx'
import Menu from './pages/Menu.jsx'
import MenuItemDetail from './pages/MenuItemDetail.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import OrdersMe from './pages/OrdersMe.jsx'
import OrderTrack from './pages/OrderTrack.jsx'

const App = () => {
  return (
    <RootLayout>
      <header className="sticky top-0 z-40 bg-sushi-paper backdrop-blur-sm shadow-soft">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
          <div className="font-black tracking-wide text-sushi-ink text-xl">Sushitown</div>
          <nav className="ml-auto flex items-center gap-4 text-sushi-ink">
            <NavLink to="/" className="px-3 py-2 rounded-lg hover:bg-white/50">Inicio</NavLink>
            <NavLink to="/menu" className="px-3 py-2 rounded-lg hover:bg-white/50">Menú</NavLink>
            <NavLink to="/cart" className="px-3 py-2 rounded-lg hover:bg-white/50">Carrito</NavLink>
            <NavLink to="/orders" className="px-3 py-2 rounded-lg hover:bg-white/50">Mis pedidos</NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<MenuItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<OrdersMe />} />
          <Route path="/orders/:id" element={<OrderTrack />} />
        </Routes>
      </main>

      <footer className="py-8 text-center text-xs text-sushi-ink/70">© {new Date().getFullYear()} Sushitown</footer>
    </RootLayout>
  )
}

export default App
