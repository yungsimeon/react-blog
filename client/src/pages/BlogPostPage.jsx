import { useParams, Link } from "react-router-dom";
import { fetchBlogPostById } from "../components/ApiQueries";
import { useState, useEffect } from "react";
import CommentForm from "../components/CommentForm";
import RelatedPosts from "../components/RelatedPosts";

export default function BlogPostPage({ relatedPosts }) {
  const { blogId } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = "http://localhost:1337";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    fetchBlogPostById(blogId)
      .then((data) => {
        console.log("dataaa....", data);
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
    <div className="h-full px-96 mt-40">
      <div className="flex gap-4 mb-8 items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          {blogPost.attributes.blogIconImg && (
            <img
              src={`${API_URL}${blogPost.attributes.blogIconImg.data.attributes.url}`}
              alt={blogPost.attributes.blogAuthor}
            />
          )}
        </div>

        <p>{blogPost.attributes.blogAuthor}</p>
        <div className="flex items-center gap-3">
          <div className="w-1 h-1 bg-black rounded-full mb-1"></div>

          <p>{formatDate(blogPost.attributes.createdAt)}</p>
          <div className="w-1 h-1 bg-black rounded-full mb-1"></div>
          <p>{blogPost.attributes.blogReadingTime}</p>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="font-futura text-4xl font-bold mb-3">
          {blogPost.attributes.blogTitle}
        </h2>
        <p className="text-2xl mb-4">{blogPost.attributes.blogDescription}</p>
      </div>
      <div className="w-full h-full mb-10">
        {blogPost.attributes.blogImage && (
          <img
            src={`${API_URL}${blogPost.attributes.blogImage.data.attributes.url}`}
            alt={blogPost.attributes.blogTitle}
          />
        )}
      </div>
      <div className="mb-10 pb-10 border-b border-gray-400">
        <p className="text-lg">
          {blogPost.attributes.blogContent[0].children[0].text}
        </p>
      </div>

      <div>
        <p className="text-xl font-semibold mb-10">
          {blogPost.attributes.comments.data.length} comments
        </p>
        {blogPost.attributes.comments.data.length > 0 ? (
          blogPost.attributes.comments.data.map((comment) => (
            <div
              key={
                comment.attributes.commentAuthor +
                comment.attributes.commentCreatedAt
              }
              className="mb-10"
            >
              <p className="font-semibold">
                {comment.attributes.commentAuthor}
              </p>
              <p>{comment.attributes.commentContent}</p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>

      <CommentForm blogId={blogId} onCommentAdded={handleCommentAdded} />

      <RelatedPosts />
    </div>
  );
}
