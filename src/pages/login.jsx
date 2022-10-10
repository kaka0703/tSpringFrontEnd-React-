import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha"
import AuthHeader from "../components/auth-header"
import Facebook from "../assets/images/facebook.png"
import Google from "../assets/images/google.png"
import Youtube from "../assets/images/youtube.png"
import AuthService from "../services/auth-service"
import "../assets/styles/auth.scss"

const Login = () => {
  const [email, setEmail] = useState("robert@gmail.com")
  const [password, setPassword] = useState("1234567890")
  const [isEmailValid, setEmailValid] = useState(true)
  const [isLoginValid, setLoginValid] = useState(true)
  const navigate = useNavigate()

  const onLogin = (e) => {
    e.preventDefault()

    AuthService.login(email, password)
      .then((res) => {
        if (res.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(res.data))
        }
        navigate("/design")
      }, (err) => {
        // alert(err.response.data.message)
        if (err.response.status === 401) {
          setLoginValid(false)
        } else if (err.response.status === 404) {
          setEmailValid(false)
        }
      })
  }

  return (
    <>
      <AuthHeader isLogin={true} />
      <div className="auth-container d-flex justify-content-center align-items-lg-center w-100 px-2 py-5">
        <div className="login-content w-100">
          <div className="auth-header">
            <h2 className="auth-title text-center lh-base pt-4 pb-3">
              Login to Spring
            </h2>
          </div>

          <div className="d-flex flex-column flex-lg-row pt-lg-5">
            <div className="login-left d-flex justify-content-center w-100">
              <form className="auth-content auth-form d-flex flex-column w-100">
                <label htmlFor="email" className="form-label fw-bold">Email</label>
                <input
                  id="email"
                  className={isEmailValid ? "form-control rounded-0" : "form-control rounded-0 red-input"}
                  type="email"
                  placeholder="you@example.com"
                  required
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setEmailValid(true)
                  }}
                  value={email}
                />
                {!isEmailValid &&
                  <p className="mt-1 red-text">The email you've entered doesn't match any account.</p>
                }

                <label htmlFor="password" className="form-label mt-3 fw-bold">Password</label>
                <input
                  id="password"
                  className="form-control mb-3 rounded-0"
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setLoginValid(true)
                  }}
                  value={password}
                />

                <Link to="/" className="pb-2">Using 2 Factor Authentication? Click here!</Link>
                <ReCAPTCHA className="mt-3" sitekey={process.env.REACT_APP_SITE_KEY} />
                {!isLoginValid &&
                  <p className="mt-1 red-text">Sorry, that is not a valid login!</p>
                }

                <button className="auth-btn mt-3 border-0 text-white" onClick={onLogin}>Log in</button>
                <Link to="/" className="pt-4 pb-2">Reset your password</Link>
                <Link to="/signup">New to Spring? Create an account</Link>
              </form>
            </div>

            <div className="login-right d-flex justify-content-center align-items-center w-100">
              <div className="auth-content w-100 d-flex flex-column">
                <div className="auth-or d-lg-none pt-2 text-center">
                  <p>or</p>
                </div>
                <button className="social-btn">
                  <img className="social-icon" src={Youtube} alt="youtube" />
                  Continue with YouTube
                </button>
                <button className="social-btn">
                  <img className="social-icon" src={Google} alt="google" />
                  Continue with Google
                </button>
                <button className="social-btn">
                  <img className="social-icon" src={Facebook} alt="facebook" />
                  Continue with Facebook
                </button>
              </div>
            </div>
          </div>

          <p className="text-center mt-3 mt-lg-5">
            By logging in you agree to our <Link to="/">Terms of Service</Link> and <Link to="/">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
