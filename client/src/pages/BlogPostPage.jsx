import { useParams } from "react-router-dom";
import { fetchBlogPostById } from "../components/ApiQueries";
import { useState, useEffect } from "react";
import CommentForm from "../components/commentForm";

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

  const handleCommentAdded = () => {
    // Optionally, re-fetch the blog post to update comments
    fetchBlogPostById(blogId).then(setBlogPost);
  };

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

      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Comments</h2>
        {blogPost.attributes.comment.data.length > 0 ? (
          blogPost.attributes.comment.data.map((comment) => (
            <div
              key={
                comment.attributes.commentAuthor +
                comment.attributes.commentCreatedAt
              }
              className="mb-2"
            >
              <p className="font-bold">{comment.attributes.commentAuthor}</p>
              <p>{comment.attributes.commentContent}</p>
              <p>{comment.attributes.commentCreatedAt}</p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>

      <CommentForm blogId={blogId} onCommentAdded={handleCommentAdded} />

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Tags</h2>
        {blogPost.attributes.blogTag &&
        blogPost.attributes.blogTag.length > 0 ? (
          blogPost.attributes.blogTag.map((tag, index) => (
            <button
              key={index + tag}
              className="bg-blue-500 text-white py-1 px-2 rounded-md mr-2 mb-2"
            >
              {tag}
            </button>
          ))
        ) : (
          <p>No tags available.</p>
        )}
      </div>
    </div>
  );
}
