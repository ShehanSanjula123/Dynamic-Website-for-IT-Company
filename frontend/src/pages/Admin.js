'use client';

import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import axios from 'axios';
import '../styles/Admin.css';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", { email, password });
      localStorage.setItem("adminToken", res.data.token);
      navigate("/adminDashboard"); 
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-form-container">
        <div className="admin-login-header">
          <div className="admin-login-icon-container">
            <Lock className="admin-login-icon" />
          </div>
          <h2 className="admin-login-title">
            Admin Login
          </h2>
        </div>
        <form className="admin-login-form" onSubmit={handleLogin}>
          <div className="admin-login-inputs">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="admin-login-input admin-login-input-top"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="admin-login-input admin-login-input-bottom"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="admin-login-button"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin; 
