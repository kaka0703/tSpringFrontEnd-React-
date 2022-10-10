import { Link } from "react-router-dom"
import Logo from "../../assets/images/logo.svg"
import LogoDark from "../../assets/images/logo-dark.svg"
import LogoMobile from "../../assets/images/logo-mobile.svg"
import "./auth-header.scss"

const AuthHeader = ({ isLogin }) => {
  return (
    <header className="auth-header position-absolute d-flex justify-content-between align-items-center w-100 p-lg-3">
      <Link to="/" className="logo">
        <img className="d-lg-none" src={LogoMobile} alt="logo" />
        <img className="d-none d-lg-block" src={isLogin ? LogoDark : Logo} alt="logo" />
      </Link>

      {isLogin ? (
        <Link to="/signup" className="create-btn text-white text-decoration-none">Create account</Link>
      ) : (
        <p className="header-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      )}
    </header>
  )
}

export default AuthHeader
