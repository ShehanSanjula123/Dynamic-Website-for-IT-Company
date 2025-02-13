import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import Home from "./components/Home"
import Services from "./components/Services"
import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import AdminPanel from "./components/AdminPanel"


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/admin">Admin Panel</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin" component={AdminPanel} />
        </Routes>

        <footer>
          <p>&copy; 2023 IT Company. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App

