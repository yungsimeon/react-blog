import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import blogData from "./assets/blog.json";

export default function App() {
  const [blogs, setBlogs] = useState(blogData);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage blogs={blogs} setBlogs={setBlogs} />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}
