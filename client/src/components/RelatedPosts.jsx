import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchAllBlogPosts } from "./ApiQueries"; // Update with the actual path

export default function RelatedPosts() {
  const API_URL = "http://localhost:1337";
  const { blogId } = useParams();
  const [blogPost, setBlogPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all posts once
    fetchAllBlogPosts()
      .then((data) => {
        setAllPosts(data);
        const currentPost = data.find((post) => post.id === parseInt(blogId));
        if (currentPost) {
          setBlogPost(currentPost);
          const currentTags = currentPost.attributes.blogTag || [];
          const filteredPosts = data.filter(
            (post) =>
              post.id !== currentPost.id && // Exclude the current post
              post.attributes.blogTag.some((tag) => currentTags.includes(tag))
          );
          setRelatedPosts(filteredPosts);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch blog posts.");
        setLoading(false);
      });
  }, [blogId]);
  return (
    <div>
      <h3 className="font-futura font-bold text-2xl">
        These could be interesting...
      </h3>
      <div className="flex mt-10 gap-10 h-80 justify-start mb-20">
        {relatedPosts.length > 0 ? (
          relatedPosts.map((post) => (
            <div key={post.id} className="mb-4 w-1/3">
              <Link
                to={`/blog/${post.id}`} // Navigate to the specific blog post
                key={post.id}
              >
                <img
                  className="w-full h-full object-cover rounded-lg mb-5"
                  src={`${API_URL}${post.attributes.blogImage.data.attributes.url}`}
                  alt={post.attributes.blogTitle}
                />
                <h4 className="font-semibold text-xl">
                  {post.attributes.blogTitle}
                </h4>
                <p>{post.attributes.blogDescription}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No related posts found.</p>
        )}
      </div>
    </div>
  );
}
