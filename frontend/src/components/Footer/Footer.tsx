import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Footer.css'

function IconFacebook({ className }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.35 3H13.5v6.8c4.56-.93 8-4.96 8-9.8Z" />
    </svg>
  )
}

function IconInstagram({ className }: { readonly className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__brand-logo">Serene Haven</p>
          <p className="site-footer__brand-text">
            O oază de calm și regenerare — ritualuri de masaj și spa într-un sanctuar liniștit, gândit
            pentru echilibrul tău.
          </p>
          <p className="site-footer__copyright">© {year} Serene Haven. Toate drepturile rezervate.</p>
        </div>

        <div>
          <h2 className="site-footer__heading">Navigare</h2>
          <nav className="site-footer__nav" aria-label="Footer — legături rapide">
            <Link to="/">Acasă</Link>
            <Link to="/services">Servicii</Link>
            <Link to="/#about">Despre</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div>
          <h2 className="site-footer__heading">Contact</h2>
          <ul className="site-footer__contact-list">
            <li className="site-footer__contact-item">
              <MapPin className="icon h-4 w-4" strokeWidth={1.6} aria-hidden />
              <span>Strada Liniștii Nr. 24, București</span>
            </li>
            <li className="site-footer__contact-item">
              <Phone className="icon h-4 w-4" strokeWidth={1.6} aria-hidden />
              <a href="tel:+40722000111">+40 722 000 111</a>
            </li>
            <li className="site-footer__contact-item">
              <Mail className="icon h-4 w-4" strokeWidth={1.6} aria-hidden />
              <a href="mailto:contact@serenehaven.ro">contact@serenehaven.ro</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Social</h2>
          <div className="site-footer__socials">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Serene Haven pe Instagram"
            >
              <IconInstagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Serene Haven pe Facebook"
            >
              <IconFacebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
