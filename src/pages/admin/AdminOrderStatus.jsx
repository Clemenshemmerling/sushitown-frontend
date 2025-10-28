import { useEffect, useState } from 'react'
import { fetchAdminOrders, updateOrderStatus } from '../../services/orders'

const statuses = ['pending','accepted','preparing','ready','out_for_delivery','completed','cancelled']

const AdminOrderStatus = () => {
  const [list, setList] = useState([])

  const load = async () => {
    const data = await fetchAdminOrders()
    setList(data)
  }

  useEffect(() => { load() }, [])

  const setStatus = async (id, status) => {
    await updateOrderStatus(id, status)
    await load()
  }

  return (
    <section className="grid gap-4 rounded-2xl p-6 bg-sushi-paper shadow-soft">
      <h1 className="text-2xl font-black text-sushi-ink">Cambiar estado de pedidos</h1>
      <ul className="grid gap-4">
        {list.map(o => (
          <li key={o.id} className="rounded-xl border p-4 grid gap-2">
            <div className="flex items-center justify-between">
              <span className="font-semibold">#{o.id}</span>
              <span className="text-xs px-2 py-1 rounded-full bg-black/80 text-white">{o.status}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {statuses.map(s => (
                <button key={s} onClick={() => setStatus(o.id, s)} className="px-3 py-2 rounded-xl border">
                  {s}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default AdminOrderStatus
