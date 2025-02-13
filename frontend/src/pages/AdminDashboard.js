"use client";
import { useState, useEffect } from "react";
import { Users, FileText, MessageSquare, BarChart2, Plus, Edit, Trash } from "lucide-react";
import axios from "axios";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const [stats, setStats] = useState({});
  const [recentActivities, setRecentActivities] = useState([]);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/stats").then((res) => setStats(res.data));
    axios.get("http://localhost:5000/api/recent-activities").then((res) => setRecentActivities(res.data));
    axios.get("http://localhost:5000/api/blogs").then((res) => setBlogs(res.data));
  }, []);

  const addBlog = async () => {
    const title = prompt("Enter Blog Title:");
    if (title) {
      const res = await axios.post("http://localhost:5000/api/blogs", { title });
      setBlogs([...blogs, res.data]);
    }
  };

  const editBlog = async (id) => {
    const title = prompt("Edit Blog Title:");
    if (title) {
      await axios.put(`http://localhost:5000/api/blogs/${id}`, { title });
      setBlogs(blogs.map((blog) => (blog.id === id ? { ...blog, title } : blog)));
    }
  };

  const deleteBlog = async (id) => {
    await axios.delete(`http://localhost:5000/api/blogs/${id}`);
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>

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
          <h2 className="dashboard-section-title">Quick Actions</h2>
          <div className="dashboard-actions">
            <button className="dashboard-action-button" onClick={addBlog}>
              <Plus size={18} />
              Add New Post
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
              <li key={blog.id} className="dashboard-blog-item">
                <span>{blog.title}</span>
                <div className="dashboard-blog-actions">
                  <button className="dashboard-blog-action-button" onClick={() => editBlog(blog.id)}>
                    <Edit size={16} />
                  </button>
                  <button className="dashboard-blog-action-button" onClick={() => deleteBlog(blog.id)}>
                    <Trash size={16} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
