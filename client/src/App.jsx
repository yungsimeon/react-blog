import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
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
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:blogId" element={<BlogPostPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
