import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import RootLayout from './layouts/RootLayout.jsx'
import Landing from './pages/Landing.jsx'
import Menu from './pages/Menu.jsx'
import MenuItemDetail from './pages/MenuItemDetail.jsx'
import Cart from './pages/Cart.jsx'
import Checkout from './pages/Checkout.jsx'
import OrdersMe from './pages/OrdersMe.jsx'
import OrderTrack from './pages/OrderTrack.jsx'
import Header from './components/Header.jsx'
import './index.css'

const App = () => {
  const location = useLocation()

  return (
    <RootLayout>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <Routes location={location}>
              <Route path="/" element={<Landing />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:id" element={<MenuItemDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/orders" element={<OrdersMe />} />
              <Route path="/orders/:id" element={<OrderTrack />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="py-8 text-center text-xs text-sushi-ink/70">© {new Date().getFullYear()} Sushitown</footer>
    </RootLayout>
  )
}

export default App
