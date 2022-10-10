import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha"
import AuthHeader from "../components/auth-header"
import Facebook from "../assets/images/facebook.png"
import Google from "../assets/images/google.png"
import Youtube from "../assets/images/youtube.png"
import AuthService from "../services/auth-service"
import "../assets/styles/auth.scss"

const Signup = () => {
  const [username, setUsername] = useState("robert")
  const [email, setEmail] = useState("robert@gmail.com")
  const [password, setPassword] = useState("1234567890")
  const [confirm, setConfirm] = useState("1234567890")
  const [isEmailTaken, setEmailTaken] = useState(false)
  const [isPasswordShort, setPasswordShort] = useState(false)
  const [isPasswordMatch, setPasswordMatch] = useState(true)
  const navigate = useNavigate()

  const onSignup = (e) => {
    e.preventDefault()

    if (password.length < 6) {
      setPasswordShort(true)
      return
    } else {
      setPasswordShort(false)
    }

    if (password !== confirm) {
      setPasswordMatch(false)
      return
    } else {
      setPasswordMatch(true)
    }

    AuthService.signup(username, email, password)
      .then((res) => {
        // alert(res.data.message)
        setTimeout(() => navigate("/login"), 1000)
      }, (err) => {
        if (err.response.status === 400) {
          setEmailTaken(true)
        }
      })
  }

  return (
    <>
      <AuthHeader isLogin={false} />
      <div className="auth-container d-flex w-100">
        <div className="signup-hero d-none d-lg-block"></div>
        <div className="d-flex flex-grow-1 flex-column justify-content-center align-items-center px-2 py-5">
          <div className="auth-content w-100 m-auto">
            <div className="auth-header pb-3">
              <h2 className="auth-title py-3 lh-base">
                Create with Spring.<br />
                Sell on social.
              </h2>
              <p className="auth-detail d-lg-none">
                A simple solution for creating and selling products that engage your fans and help you monetize your content. No cost, no hassle, no risk.
              </p>
            </div>

            <form className="auth-form d-flex flex-column">
              <label htmlFor="username" className="form-label fw-bold">Your name or Brand name</label>
              <input
                id="username"
                className="form-control mb-3 rounded-0"
                type="text"
                placeholder="John Doe"
                required
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />

              <label htmlFor="email" className="form-label fw-bold">Email</label>
              <input
                id="email"
                className={isEmailTaken ? "form-control rounded-0 red-input" : "form-control rounded-0"}
                type="email"
                placeholder="you@example.com"
                required
                onChange={(e) => {
                  setEmail(e.target.value)
                  setEmailTaken(false)
                }}
                value={email}
              />
              {isEmailTaken &&
                <p className="mt-1 red-text">Email has already been taken.</p>
              }

              <label htmlFor="password" className="form-label mt-3 fw-bold">Password</label>
              <input
                id="password"
                className={isPasswordShort ? "form-control mb-3 rounded-0 red-input" : "form-control mb-3 rounded-0"}
                type="password"
                placeholder="Password"
                required
                onChange={(e) => {
                  setPassword(e.target.value)
                  setPasswordShort(false)
                  setPasswordMatch(true)
                }}
                value={password}
              />

              <input
                id="confirm"
                className={!isPasswordMatch ? "form-control rounded-0 red-input" : "form-control rounded-0"}
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => {
                  setConfirm(e.target.value)
                  setPasswordShort(false)
                  setPasswordMatch(true)
                }}
                value={confirm}
              />
              {isPasswordShort &&
                <p className="mt-1 red-text">Password is too short (minimum is 6 characters)</p>
              }
              {!isPasswordMatch &&
                <p className="mt-1 red-text">Password confirmation doesn't match Password</p>
              }

              <ReCAPTCHA className="my-3" sitekey={process.env.REACT_APP_SITE_KEY} />
              <p className="small my-3">
                By creating your account, you agree to our <Link to="/">Terms of Service</Link> and <Link to="/">Privacy Policy</Link>
              </p>

              <button className="auth-btn border-0 text-white" onClick={onSignup}>Sign up</button>
            </form>

            <div className="text-center">
              <p className="my-4">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
              <div className="auth-or pt-2 text-center">
                <p>or</p>
              </div>
              <p className="continue-text py-2">Continue with</p>

              <div className="d-flex justify-content-evenly mt-2 pt-1">
                <Link to="/">
                  <img className="social-icon" src={Facebook} alt="facebook" />
                </Link>
                <Link to="/">
                  <img className="social-icon" src={Google} alt="google" />
                </Link>
                <Link to="/">
                  <img className="social-icon" src={Youtube} alt="youtube" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
