"use client"
import { Calendar, User, ArrowRight } from "lucide-react"
import "../styles/Blog.css"

function Blog() {
  const posts = [
    {
      title: "The Future of Cloud Computing",
      excerpt: "Explore the latest trends and innovations in cloud technology...",
      author: "John Smith",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Cybersecurity Best Practices",
      excerpt: "Essential security measures for modern businesses...",
      author: "Sarah Johnson",
      date: "March 12, 2024",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Digital Transformation Success Stories",
      excerpt: "How companies are leveraging technology to transform...",
      author: "Mike Wilson",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
  ]

  return (
    <div className="blog-container">
      <div className="blog-content">
        <div className="blog-header">
          <h1 className="blog-title">Our Blog</h1>
          <p className="blog-subtitle">Insights and updates from the world of technology</p>
        </div>

        <div className="blog-grid">
          {posts.map((post, index) => (
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

