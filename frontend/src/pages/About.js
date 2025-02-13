import React from 'react';
import { Users, Award, Target } from 'lucide-react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-header">
          <h1 className="about-title">About Us</h1>
          <p className="about-subtitle">Leading the way in innovative IT solutions</p>
        </div>

        <div className="about-story">
          <div className="about-story-text">
            <h2 className="about-story-title">Our Story</h2>
            <p className="about-story-paragraph">
              Founded in 2015, TechPro Solutions has been at the forefront of digital transformation,
              helping businesses leverage technology to achieve their goals.
            </p>
            <p className="about-story-paragraph">
              We combine technical expertise with industry knowledge to deliver solutions
              that drive growth and efficiency for our clients.
            </p>
          </div>
          <div className="about-story-image">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaboration"
              className="about-image"
            />
          </div>
        </div>

        <div className="about-features">
          <div className="about-feature">
            <Users className="about-feature-icon" />
            <h3 className="about-feature-title">Expert Team</h3>
            <p className="about-feature-description">Skilled professionals dedicated to your success</p>
          </div>
          <div className="about-feature">
            <Award className="about-feature-icon" />
            <h3 className="about-feature-title">Industry Recognition</h3>
            <p className="about-feature-description">Award-winning solutions and services</p>
          </div>
          <div className="about-feature">
            <Target className="about-feature-icon" />
            <h3 className="about-feature-title">Client Focus</h3>
            <p className="about-feature-description">Committed to delivering exceptional results</p>
          </div>
        </div>

        <div className="about-values">
          <h2 className="about-values-title">Our Values</h2>
          <div className="about-values-grid">
            {['Innovation', 'Integrity', 'Excellence', 'Collaboration'].map((value, index) => (
              <div key={index} className="about-value-item">
                <h3 className="about-value-title">{value}</h3>
                <p className="about-value-description">
                  Driving success through {value.toLowerCase()} in everything we do.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
