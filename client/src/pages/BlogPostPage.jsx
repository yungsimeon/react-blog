import { useParams } from "react-router-dom";

export default function BlogPostPage({ blogs }) {
  const { blogId } = useParams();
  const blogPost = blogs.find((blog) => String(blog.id) === String(blogId));

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
        {blogPost.title}
      </h1>
      <h4 className="text-lg font-semibold text-gray-700 mb-4">
        {blogPost.description}
      </h4>
      <img
        src={blogPost.image}
        alt={blogPost.title}
        className="w-100 h-auto object-cover rounded-md mb-4"
      />
      <p className="text-gray-800 leading-relaxed">{blogPost.content}</p>
    </div>
  );
}
