require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Blog = require("./models/Blog");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

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

// API Route to Get Dashboard Stats
app.get("/api/stats", (req, res) => {
  res.json(stats);
});

// API Route to Get Recent Activities
app.get("/api/recent-activities", (req, res) => {
  res.json(recentActivities);
});

// API Route to Get Blog Posts
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// API Route to Add a Blog Post
app.post("/api/blogs", async (req, res) => {
  const { title, excerpt, author, date, image } = req.body;
  try {
    const newBlog = new Blog({ title, excerpt, author, date, image });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// API Route to Edit a Blog Post
app.put("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const { title, excerpt, author, date, image } = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, excerpt, author, date, image },
      { new: true }
    );
    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// API Route to Delete a Blog Post
app.delete("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Blog.findByIdAndDelete(id);
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));