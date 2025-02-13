"use client"
import { Server, Code, Database, Cloud, Shield, Smartphone } from "lucide-react"
import "../styles/Services.css"

function Services() {
  const services = [
    {
      icon: <Server className="service-icon" />,
      title: "IT Infrastructure",
      description: "Modern, scalable infrastructure solutions tailored to your business needs.",
    },
    {
      icon: <Code className="service-icon" />,
      title: "Custom Software Development",
      description: "Bespoke software solutions designed to streamline your operations.",
    },
    {
      icon: <Database className="service-icon" />,
      title: "Data Management",
      description: "Comprehensive data solutions including storage, analysis, and visualization.",
    },
    {
      icon: <Cloud className="service-icon" />,
      title: "Cloud Services",
      description: "Secure and efficient cloud computing solutions for your business.",
    },
    {
      icon: <Shield className="service-icon" />,
      title: "Cybersecurity",
      description: "Advanced security measures to protect your digital assets.",
    },
    {
      icon: <Smartphone className="service-icon" />,
      title: "Mobile Solutions",
      description: "Custom mobile applications and responsive web design.",
    },
  ]

  return (
    <div className="services-container">
      <div className="services-content">
        <div className="services-header">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">Comprehensive IT solutions for modern businesses</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">{service.icon}</div>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services

