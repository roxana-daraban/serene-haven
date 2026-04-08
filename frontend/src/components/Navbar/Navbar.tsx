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
            Home
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => navLinkClassName(isActive)}>
            Services
          </NavLink>
          <Link to="/#about">About Us</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
        <button className="services-book-btn" type="button">
          Book Now
        </button>
      </div>
    </header>
  )
}
