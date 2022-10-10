import SiteHeader from "../components/site-header"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SiteHeader />
      {children}
    </div>
  )
}

export default Layout
