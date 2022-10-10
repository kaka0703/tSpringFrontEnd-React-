import { Navigate, Outlet } from "react-router-dom"
import AuthService from "../services/auth-service"

const AuthRoutes = () => {
  const user = AuthService.getCurrentUser()
  return user && user.accessToken ? <Navigate to="/design" /> : <Outlet />
}

export default AuthRoutes
