import { useParams } from "react-router-dom";
import { fetchBlogPostById } from "../components/ApiQueries";
import { useState, useEffect } from "react";

export default function BlogPostPage() {
  const { blogId } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = "http://localhost:1337";

  useEffect(() => {
    fetchBlogPostById(blogId)
      .then((data) => {
        setBlogPost(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch blog post.");
        setLoading(false);
      });
  }, [blogId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!blogPost) return <p>Blog post not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        {blogPost.attributes.blogTitle}
      </h1>
      <h4 className="text-lg font-semibold text-gray-700 mb-4">
        {blogPost.attributes.blogDescription}
      </h4>
      <p>{blogPost.attributes.blogContent[0].children[0].text}</p>
      {blogPost.attributes.blogImage && (
        <img
          src={`${API_URL}${blogPost.attributes.blogImage.data.attributes.url}`}
          alt={blogPost.attributes.blogTitle}
          className="w-100 h-auto object-cover rounded-md mb-4"
        />
      )}
    </div>
  );
}
