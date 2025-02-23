'use client';

import React, { useState } from 'react';
import { Lock, Mail, Key, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import '../styles/Admin.css';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", { email, password });
      setIsLoggedIn(true)
      localStorage.setItem("adminToken", res.data.token);
      navigate("/adminDashboard"); 
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  if (!isLoggedIn) {
  return (
    <div className="admin-login-container">
      <div className="admin-login-form-container">
        <div className="admin-login-header">
          <div className="admin-login-icon-container">
            <Lock className="admin-login-icon" />
          </div>
          <h2 className="admin-login-title">Admin Login</h2>
          <p className="admin-login-subtitle">Enter your credentials to access the dashboard</p>
        </div>
        <form className="admin-login-form" onSubmit={handleLogin}>
          <div className="admin-login-inputs">
            <div className="admin-login-input-group">
              <Mail className="admin-login-input-icon" />
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="admin-login-input"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="admin-login-input-group">
              <Key className="admin-login-input-icon" />
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="admin-login-input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="admin-login-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="admin-login-options">
            <label className="admin-login-remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
          </div>

          <button type="submit" className="admin-login-button">
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

return (
  <div className="admin-dashboard-container">
    <div className="admin-dashboard-content">
      <h1 className="admin-dashboard-title">Admin Dashboard</h1>
      <div className="admin-dashboard-grid">
        <div className="admin-dashboard-card">
          <h2 className="admin-dashboard-card-title">Blog Posts</h2>
          <button className="admin-dashboard-card-button">Manage Posts</button>
        </div>
        <div className="admin-dashboard-card">
          <h2 className="admin-dashboard-card-title">Services</h2>
          <button className="admin-dashboard-card-button">Manage Services</button>
        </div>
        <div className="admin-dashboard-card">
          <h2 className="admin-dashboard-card-title">Messages</h2>
          <button className="admin-dashboard-card-button">View Messages</button>
        </div>
      </div>
    </div>
  </div>
)
}

export default Admin