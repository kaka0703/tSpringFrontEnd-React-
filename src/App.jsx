import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Home, Login, Signup, Welcome, Design, Admin } from "./pages"
import { AuthRoutes, PrivateRoutes, AdminRoutes } from "./routes"
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/styles/app.scss"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route element={<AuthRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/design" element={<Design />} />
        </Route>

        <Route element={<AdminRoutes />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
