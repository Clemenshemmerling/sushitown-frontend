import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const AdminOrdersLive = () => {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const s = io(import.meta.env.VITE_API_URL, { transports: ['websocket'] })
    s.on('order_created', o => setOrders(prev => [o, ...prev]))
    return () => { s.disconnect() }
  }, [])
  return (
    <section className="grid gap-4 rounded-2xl p-6 bg-sushi-paper shadow-soft">
      <h1 className="text-2xl font-black text-sushi-ink">Pedidos en tiempo real</h1>
      <ul className="grid gap-3">
        {orders.map(o => (
          <li key={o.id} className="rounded-xl border p-3 flex items-center justify-between">
            <span>#{o.id}</span>
            <span className="text-xs px-2 py-1 rounded-full bg-black/80 text-white">{o.status}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
export default AdminOrdersLive
