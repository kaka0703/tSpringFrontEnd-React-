import { Navigate, Outlet } from "react-router-dom"
import AuthService from "../services/auth-service"

const AdminRoutes = () => {
  const user = AuthService.getCurrentUser()
  return user && user.accessToken && user.roles.includes("ROLE_ADMIN") ? <Outlet /> : <Navigate to="/design" />
}

export default AdminRoutes
