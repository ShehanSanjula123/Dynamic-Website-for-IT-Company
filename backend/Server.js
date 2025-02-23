require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mockAdmins = [
  { email: "admin@example.com", password: "admin123" },
  { email: "superadmin@example.com", password: "super123" },
];

// Admin Login Route
app.post("/api/admin/login", (req, res) => {
  const { email, password } = req.body;
  const admin = mockAdmins.find((user) => user.email === email && user.password === password);

  if (!admin) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email: admin.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
});

// Mock Statistics Data
const stats = {
  totalUsers: 1234,
  blogPosts: 42,
  newMessages: 15,
  monthlyVisits: 24567,
};

// Mock Recent Activities
const recentActivities = [
  { action: "New user registered", time: "2 hours ago" },
  { action: "Blog post published", time: "4 hours ago" },
  { action: "Service updated", time: "Yesterday" },
  { action: "New comment received", time: "2 days ago" },
];

// Mock Blog Data
let blogs = [
  { id: 1, title: "The Future of Cloud Computing" },
  { id: 2, title: "Cybersecurity Best Practices" },
  { id: 3, title: "Digital Transformation Success Stories" },
];

// API Route to Get Dashboard Stats
app.get("/api/stats", (req, res) => {
  res.json(stats);
});

// API Route to Get Recent Activities
app.get("/api/recent-activities", (req, res) => {
  res.json(recentActivities);
});

// API Route to Get Blog Posts
app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

// API Route to Add a Blog Post
app.post("/api/blogs", (req, res) => {
  const { title } = req.body;
  const newBlog = { id: blogs.length + 1, title };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

// API Route to Edit a Blog Post
app.put("/api/blogs/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  blogs = blogs.map((blog) => (blog.id === parseInt(id) ? { ...blog, title } : blog));
  res.json({ message: "Blog updated successfully" });
});

// API Route to Delete a Blog Post
app.delete("/api/blogs/:id", (req, res) => {
  const { id } = req.params;
  blogs = blogs.filter((blog) => blog.id !== parseInt(id));
  res.json({ message: "Blog deleted successfully" });
});




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

