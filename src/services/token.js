let _token = localStorage.getItem('token') || ''

export const getToken = () => _token
export const setToken = t => {
  _token = t || ''
  if (t) localStorage.setItem('token', t)
  else localStorage.removeItem('token')
}
