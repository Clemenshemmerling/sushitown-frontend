import http from './http'

export const fetchMenu = async () => {
  const r = await http.get('/menu')
  return r.data
}

export const fetchMenuItem = async id => {
  const r = await http.get(`/menu/${id}`)
  return r.data
}

export const createMenuItem = async payload => {
  const r = await http.post('/admin/menu-items', payload)
  return r.data
}

export const updateMenuItem = async (id, payload) => {
  const r = await http.put(`/admin/menu-items/${id}`, payload)
  return r.data
}
