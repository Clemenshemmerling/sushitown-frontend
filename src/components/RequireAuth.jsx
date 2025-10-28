import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../state/auth.jsx'

const RequireAuth = ({ children, roles }) => {
  const { isAuth, role } = useAuth()
  const location = useLocation()
  if (!isAuth) return <Navigate to="/login" state={{ from: location }} replace />
  if (roles && roles.length && !roles.includes(role)) return <Navigate to="/" replace />
  return children
}

export default RequireAuth
