import { Navigate, Outlet } from "react-router-dom"
import AuthService from "../services/auth-service"

const PrivateRoutes = () => {
  const user = AuthService.getCurrentUser()
  return user && user.accessToken ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoutes
