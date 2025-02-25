"use client"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import "../styles/Contact.css"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()
  const [message, setMessage] = useState("") // State to manage success/error messages

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_gn7k99b', 'template_hdwewth', form.current, {
        publicKey: 'MYppj_tfb2RRMXBBf',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          setMessage("Message sent successfully!") // Set success message
          form.current.reset() // Clear the form
        },
        (error) => {
          console.log('FAILED...', error.text)
          setMessage("Failed to send message. Please try again.") // Set error message
        }
      )
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
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" name="from_name" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" name="from_email" className="form-input" required />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea name="message" rows={4} className="form-input" required></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
                <Send size={16} className="submit-icon" />
              </button>
            </form>
            {/* Display success/error message */}
            {message && (
              <div className={`message ${message.includes("successfully") ? "success" : "error"}`}>
                {message}
              </div>
            )}
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