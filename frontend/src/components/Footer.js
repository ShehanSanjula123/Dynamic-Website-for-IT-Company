import { Link } from "react-router-dom"
import { Mail, Phone, MapPin } from "lucide-react"
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">TechPro Solutions</h3>
            <p className="footer-description">Delivering innovative IT solutions for businesses worldwide.</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <Mail size={16} />
                <span>info@techpro.com</span>
              </li>
              <li className="footer-contact-item">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="footer-contact-item">
                <MapPin size={16} />
                <span>123 Tech Street, Silicon Valley</span>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-subtitle">Follow Us</h4>
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                LinkedIn
              </a>
              <a href="#" className="footer-social-link">
                Twitter
              </a>
              <a href="#" className="footer-social-link">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TechPro Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

