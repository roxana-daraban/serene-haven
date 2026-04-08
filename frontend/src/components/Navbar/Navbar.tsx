import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function navLinkClassName(isActive: boolean): string {
  return isActive ? 'is-active' : ''
}

export function Navbar() {
  return (
    <header className="services-nav">
      <div className="services-nav-inner">
        <Link to="/" className="services-logo">
          Serene Haven
        </Link>
        <nav className="services-menu" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => navLinkClassName(isActive)}>
            Acasă
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => navLinkClassName(isActive)}>
            Servicii
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => navLinkClassName(isActive)}>
            Contact
          </NavLink>
        </nav>
        <Link to="/contact" className="services-book-btn">
          Rezervă
        </Link>
      </div>
    </header>
  )
}
