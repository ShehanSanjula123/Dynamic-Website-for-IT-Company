"use client"
import { useState, useEffect } from "react"
import { Users, FileText, MessageSquare, BarChart2, Plus, Edit, Trash, LogOut ,Calendar, User} from "lucide-react"  
import axios from "axios"
import "../styles/AdminDashboard.css"

function AdminDashboard() {
  const [stats, setStats] = useState({})
  const [recentActivities, setRecentActivities] = useState([])
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    // Fetch stats, recent activities, and blogs
    axios.get("http://localhost:5000/api/stats").then((res) => setStats(res.data))
    axios.get("http://localhost:5000/api/recent-activities").then((res) => setRecentActivities(res.data))
    axios.get("http://localhost:5000/api/blogs").then((res) => setBlogs(res.data))
  }, [])

  const addBlog = async () => {
    const title = prompt("Enter Blog Title:")
    const excerpt = prompt("Enter Blog Excerpt:")
    const author = prompt("Enter Author Name:")
    const date = prompt("Enter Publish Date (e.g., March 15, 2024):")
    const image = prompt("Enter Image URL:")

    if (title && excerpt && author && date && image) {
      try {
        const res = await axios.post("http://localhost:5000/api/blogs", {
          title,
          excerpt,
          author,
          date,
          image,
        })
        setBlogs([...blogs, res.data])
      } catch (error) {
        console.error("Error adding blog:", error)
      }
    } else {
      alert("All fields are required!")
    }
  }

  const editBlog = async (id) => {
    const title = prompt("Edit Blog Title:")
    const excerpt = prompt("Edit Blog Excerpt:")
    const author = prompt("Edit Author Name:")
    const date = prompt("Edit Publish Date (e.g., March 15, 2024):")
    const image = prompt("Edit Image URL:")

    if (title && excerpt && author && date && image) {
      try {
        await axios.put(`http://localhost:5000/api/blogs/${id}`, {
          title,
          excerpt,
          author,
          date,
          image,
        })
        setBlogs(blogs.map((blog) => (blog._id === id ? { ...blog, title, excerpt, author, date, image } : blog)))
      } catch (error) {
        console.error("Error editing blog:", error)
      }
    } else {
      alert("All fields are required!")
    }
  }

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`)
      setBlogs(blogs.filter((blog) => blog._id !== id))
    } catch (error) {
      console.error("Error deleting blog:", error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.href = '/admin' 
  }

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Admin Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>
          <LogOut size={18} />
          Logout
        </button>
      </div>

      <div className="dashboard-stats">
        <div className="dashboard-stat-card">
          <Users className="dashboard-stat-icon" />
          <h2 className="dashboard-stat-value">{stats.totalUsers}</h2>
          <p className="dashboard-stat-title">Total Users</p>
        </div>
        <div className="dashboard-stat-card">
          <FileText className="dashboard-stat-icon" />
          <h2 className="dashboard-stat-value">{stats.blogPosts}</h2>
          <p className="dashboard-stat-title">Blog Posts</p>
        </div>
        <div className="dashboard-stat-card">
          <MessageSquare className="dashboard-stat-icon" />
          <h2 className="dashboard-stat-value">{stats.newMessages}</h2>
          <p className="dashboard-stat-title">New Messages</p>
        </div>
        <div className="dashboard-stat-card">
          <BarChart2 className="dashboard-stat-icon" />
          <h2 className="dashboard-stat-value">{stats.monthlyVisits}</h2>
          <p className="dashboard-stat-title">Monthly Visits</p>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2 className="dashboard-section-title">Quick Action</h2>
          <div className="dashboard-actions">
            <button className="dashboard-action-button" onClick={addBlog}>
              <Plus size={18} />
              Add New Posts
            </button>
          </div>
        </div>

        <div className="dashboard-section">
          <h2 className="dashboard-section-title">Recent Activities</h2>
          <ul className="dashboard-activity-list">
            {recentActivities.map((activity, index) => (
              <li key={index} className="dashboard-activity-item">
                <span className="dashboard-activity-action">{activity.action}</span>
                <span className="dashboard-activity-time">{activity.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="dashboard-section">
          <h2 className="dashboard-section-title">Latest Blog Posts</h2>
          <ul className="dashboard-blog-list">
            {blogs.map((blog) => (
              <li key={blog._id} className="dashboard-blog-item">
                <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="blog-post-image" />
              <div className="blog-post-content">
                <h2 className="blog-post-title">{blog.title}</h2>
                <p className="blog-post-excerpt">{blog.excerpt}</p>
                <div className="blog-post-meta">
                  <User size={16} className="blog-post-icon" />
                  <span className="blog-post-author">{blog.author}</span>
                  <Calendar size={16} className="blog-post-icon" />
                  <span className="blog-post-date">{blog.date}</span>
                </div>
              </div>
                <div className="dashboard-blog-actions">
                  <button className="dashboard-blog-action-button" onClick={() => editBlog(blog._id)}>
                    <Edit size={16} />
                  </button>
                  <button className="dashboard-blog-action-button" onClick={() => deleteBlog(blog._id)}>
                    <Trash size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard