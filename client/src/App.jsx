import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import blogData from "./assets/blog.json";
import BlogPostPage from "./pages/BlogPostPage";
import Footer from "./components/Footer";

export default function App() {
  const [blogs, setBlogs] = useState(blogData);
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-grey">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<HomePage blogs={blogs} setBlogs={setBlogs} />}
            />
            <Route
              path="/blog/:blogId"
              element={<BlogPostPage blogs={blogs} />}
            />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
