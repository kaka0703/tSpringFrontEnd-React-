import axios from "axios"

const AUTH_API_URL = process.env.REACT_APP_API_URL + "auth/"

const signup = (username, email, password) => {
  return axios.post(AUTH_API_URL + "signup", {
    username,
    email,
    password,
  })
}

const login = (email, password) => {
  return axios.post(AUTH_API_URL + "login", {
    email,
    password,
  })
}

const logout = () => {
  localStorage.removeItem("user")
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"))
}

const AuthService = {
  signup,
  login,
  logout,
  getCurrentUser,
}

export default AuthService
