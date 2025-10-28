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
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import AdminOrdersLive from './pages/admin/AdminOrdersLive.jsx'
import AdminOrderStatus from './pages/admin/AdminOrderStatus.jsx'
import AdminAccounting from './pages/admin/AdminAccounting.jsx'
import RequireAuth from './components/RequireAuth.jsx'
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
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/checkout" element={<RequireAuth><Checkout /></RequireAuth>} />
              <Route path="/orders" element={<RequireAuth><OrdersMe /></RequireAuth>} />
              <Route path="/orders/:id" element={<RequireAuth><OrderTrack /></RequireAuth>} />
              <Route path="/admin" element={<RequireAuth roles={['admin','staff']}><AdminDashboard /></RequireAuth>} />
              <Route path="/admin/live" element={<RequireAuth roles={['admin','cook','staff']}><AdminOrdersLive /></RequireAuth>} />
              <Route path="/admin/status" element={<RequireAuth roles={['admin','cook','courier','staff']}><AdminOrderStatus /></RequireAuth>} />
              <Route path="/admin/accounting" element={<RequireAuth roles={['admin','staff']}><AdminAccounting /></RequireAuth>} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="py-8 text-center text-xs text-sushi-ink/70">© {new Date().getFullYear()} Sushitown</footer>
    </RootLayout>
  )
}

export default App
