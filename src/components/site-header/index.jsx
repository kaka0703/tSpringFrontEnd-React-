import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo-red.svg"
import AuthService from "../../services/auth-service"
import "./site-header.scss"

const SiteHeader = () => {
  const user = AuthService.getCurrentUser()

  return (
    <header className="site-header d-flex justify-content-between align-items-center bg-white shadow-sm">
      <Link to="/" className="text-decoration-none">
        <img src={Logo} alt="logo" />
        <span className="logo-text ms-1">Teespring</span>
      </Link>

      <div>
        <Link to="/design">
          <button className="header-btn me-3 px-3 py-2 text-white">Start creating</button>
        </Link>
        {user && user.accessToken ? (
          <span className="header-link text-decoration-none" onClick={() => {
            AuthService.logout()
            window.location = "/"
          }}>Logout</span>
        ) : (
          <Link to="/login" className="header-link text-decoration-none">Login</Link>
        )}
      </div>
    </header>
  )
}

export default SiteHeader
