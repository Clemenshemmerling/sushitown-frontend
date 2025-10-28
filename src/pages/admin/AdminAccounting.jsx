import { useEffect, useMemo, useState } from 'react'
import { fetchAdminOrders } from '../../services/orders'

const AdminAccounting = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetchAdminOrders().then(setList)
  }, [])

  const summary = useMemo(() => {
    const totals = { count: 0, completed: 0, cancelled: 0, revenue: 0 }
    for (const o of list) {
      totals.count++
      if (o.status === 'completed') totals.completed++
      if (o.status === 'cancelled') totals.cancelled++
      if (o.total) totals.revenue += Number(o.total)
    }
    return totals
  }, [list])

  return (
    <section className="grid gap-6">
      <div className="grid gap-2 rounded-2xl p-6 bg-sushi-paper shadow-soft">
        <h1 className="text-2xl font-black text-sushi-ink">Contabilidad</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl border p-4 text-center">
            <div className="text-sm text-sushi-ink/70">Pedidos</div>
            <div className="text-2xl font-bold">{summary.count}</div>
          </div>
          <div className="rounded-xl border p-4 text-center">
            <div className="text-sm text-sushi-ink/70">Completados</div>
            <div className="text-2xl font-bold">{summary.completed}</div>
          </div>
          <div className="rounded-xl border p-4 text-center">
            <div className="text-sm text-sushi-ink/70">Cancelados</div>
            <div className="text-2xl font-bold">{summary.cancelled}</div>
          </div>
          <div className="rounded-xl border p-4 text-center">
            <div className="text-sm text-sushi-ink/70">Ingresos</div>
            <div className="text-2xl font-bold">Q {summary.revenue.toFixed(2)}</div>
          </div>
        </div>
      </div>
      <div className="grid gap-3 rounded-2xl p-6 bg-sushi-paper shadow-soft">
        <h2 className="text-lg font-semibold">Pedidos</h2>
        <ul className="grid gap-2">
          {list.map(o => (
            <li key={o.id} className="rounded-xl border p-3 flex items-center justify-between">
              <span>#{o.id}</span>
              <span className="text-xs px-2 py-1 rounded-full bg-black/80 text-white">{o.status}</span>
              <span>Q {Number(o.total||0).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AdminAccounting
