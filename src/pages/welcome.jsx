import { useState } from "react"
import { Link } from "react-router-dom"
import AuthHeader from "../components/auth-header"
import "../assets/styles/auth.scss"

const Signup = () => {
  const [storeUrl, setStoreUrl] = useState("beautiful")

  const onSave = (e) => {
    e.preventDefault()

    // AuthService.signup(username, email, password)
    //   .then((res) => {
    //     // alert(res.data.message)
    //     setTimeout(() => navigate("/login"), 1000)
    //   }, (err) => {
    //     if (err.response.status === 400) {
    //       setEmailTaken(true)
    //     }
    //   })
  }

  return (
    <>
      <AuthHeader isLogin={false} />
      <div className="auth-container d-flex w-100">
        <div className="signup-hero d-none d-lg-block"></div>
        <div className="d-flex flex-grow-1 flex-column justify-content-lg-center align-items-lg-center px-2 py-5">
          <div className="welcome-content w-100 mx-auto">
            <div className="auth-header pb-3">
              <h2 className="welcome-title mt-3 lh-base text-lg-center">
                Welcome to Spring
              </h2>
              <p className="mb-4 text-lg-center">
                Let's setup your localStorage
              </p>
            </div>

            <form className="auth-form d-flex flex-column">
              <label htmlFor="storeUrl" className="form-label fw-bold">
                Enter your desired Store URL. (Think wisely, it's permanent)
              </label>
              <input
                id="storeUrl"
                className="form-control mb-3 rounded-0"
                type="text"
                placeholder="My Cool Merch"
                required
                onChange={(e) => setStoreUrl(e.target.value)}
                value={storeUrl}
              />

              <button className="auth-btn border-0 text-white" onClick={onSave}>Continue</button>
            </form>

            <div>
              <p className="store-url mt-3 text-center">
                https://&lt;your text here&gt;.creator-spring.com
              </p>
              <p>
                Create account to <Link to="/">track purchases</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
