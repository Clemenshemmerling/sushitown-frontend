import http from './http'

export const createOrder = async payload => {
  const r = await http.post('/orders', payload)
  return r.data
}

export const fetchMyOrders = async () => {
  const r = await http.get('/orders/me')
  return r.data
}

export const fetchOrder = async id => {
  const r = await http.get(`/orders/${id}`)
  return r.data
}

export const fetchAdminOrders = async () => {
  const r = await http.get('/admin/orders')
  return r.data
}

export const updateOrderStatus = async (id, status) => {
  const r = await http.patch(`/admin/orders/${id}/status`, { status })
  return r.data
}
