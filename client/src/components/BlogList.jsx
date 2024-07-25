import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";
import { useState, useEffect } from "react";
import { fetchAllBlogPosts } from "./ApiQueries";

export default function BlogList() {
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllBlogPosts()
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Faild to fetch blog posts.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  const API_URL = "http://localhost:1337";

  return (
    <>
      {blogs.map((blog) => {
        return (
          <Link to={`/blog/${blog.id}`} key={blog.id}>
            <BlogItem key={blog.id} blog={blog} />
          </Link>
        );
      })}
    </>
  );
}
