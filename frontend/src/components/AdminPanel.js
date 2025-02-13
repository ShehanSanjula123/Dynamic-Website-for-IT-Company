"use client"

import { useState } from "react"

function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()
    // Here you would typically verify credentials with a server
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true)
    } else {
      alert("Invalid credentials")
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="admin-login">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <p>Welcome, Admin! Here you can manage your website content.</p>
      {/* Add content management features here */}
    </div>
  )
}

export default AdminPanel

