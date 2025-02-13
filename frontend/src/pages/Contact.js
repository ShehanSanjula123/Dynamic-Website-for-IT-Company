"use client"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import "../styles/Contact.css"

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">Get in touch with our team</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-section">
            <h2 className="contact-section-title">Send us a message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" id="name" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" id="email" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea id="message" rows={4} className="form-input" required></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
                <Send size={16} className="submit-icon" />
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2 className="contact-section-title">Contact Information</h2>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <Mail className="contact-icon" />
                <div>
                  <h3 className="contact-info-title">Email</h3>
                  <p className="contact-info-text">info@techpro.com</p>
                </div>
              </div>
              <div className="contact-info-item">
                <Phone className="contact-icon" />
                <div>
                  <h3 className="contact-info-title">Phone</h3>
                  <p className="contact-info-text">+94 701 305 794</p>
                </div>
              </div>
              <div className="contact-info-item">
                <MapPin className="contact-icon" />
                <div>
                  <h3 className="contact-info-title">Address</h3>
                  <p className="contact-info-text">
                    123 Tech Street
                    <br />
                    Colombo, Srilanka
                  </p>
                </div>
              </div>
            </div>

            <div className="office-hours">
              <h2 className="contact-section-title">Office Hours</h2>
              <div className="office-hours-list">
                <p className="office-hours-text">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="office-hours-text">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="office-hours-text">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

