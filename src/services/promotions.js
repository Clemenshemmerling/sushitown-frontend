import http from './http'

export const fetchPromotions = async () => {
  const r = await http.get('/promotions')
  return r.data
}

export const createPromotion = async payload => {
  const r = await http.post('/admin/promotions', payload)
  return r.data
}

export const updatePromotion = async (id, payload) => {
  const r = await http.put(`/admin/promotions/${id}`, payload)
  return r.data
}
