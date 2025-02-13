import React from 'react';
import { ArrowRight, CheckCircle, Users, Trophy } from 'lucide-react';
import '../styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Innovative IT Solutions for Your Business</h1>
          <p>Transform your business with cutting-edge technology solutions</p>
          <Link to="/contact" className="cta-button">
            Get Started <ArrowRight className="icon" />
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <CheckCircle className="feature-icon" />
            <h3>Expert Team</h3>
            <p>Skilled professionals dedicated to your success</p>
          </div>
          <div className="feature-card">
            <Users className="feature-icon" />
            <h3>Client Focus</h3>
            <p>Tailored solutions for your unique needs</p>
          </div>
          <div className="feature-card">
            <Trophy className="feature-icon" />
            <h3>Proven Results</h3>
            <p>Track record of successful projects</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Client Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>"{testimonial.text}"</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const testimonials = [
  {
    text: "Working with TechPro Solutions transformed our business operations. Their expertise and dedication are unmatched.",
    name: "Sarah Johnson",
    position: "CEO, Digital Innovations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  {
    text: "The team's technical knowledge and professional approach helped us achieve our digital transformation goals.",
    name: "Michael Chen",
    position: "CTO, Future Tech",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
  }
];

export default Home;