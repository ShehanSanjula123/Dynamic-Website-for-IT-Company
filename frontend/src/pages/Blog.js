"use client"
import { Calendar, User, ArrowRight } from "lucide-react"
import "../styles/Blog.css"
import { useEffect, useState } from "react"
import axios from "axios"


function Blog() {

  const [blogs, setBlogs] = useState([])
 
  useEffect (() =>{
    axios.get("http://localhost:5000/api/blogs").then((res) => setBlogs(res.data))
  }, [])
  

  return (
    <div className="blog-container">
      <div className="blog-content">
        <div className="blog-header">
          <h1 className="blog-title">Our Blog</h1>
          <p className="blog-subtitle">Insights and updates from the world of technology</p>
        </div>

        <div className="blog-grid">
          {blogs.map((post, index) => (
            <article key={index} className="blog-post">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="blog-post-image" />
              <div className="blog-post-content">
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <div className="blog-post-meta">
                  <User size={16} className="blog-post-icon" />
                  <span className="blog-post-author">{post.author}</span>
                  <Calendar size={16} className="blog-post-icon" />
                  <span className="blog-post-date">{post.date}</span>
                </div>
                <button className="blog-post-read-more">
                  Read More <ArrowRight size={16} className="blog-post-read-more-icon" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog

