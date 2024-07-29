import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";

export default function BlogList({ blogs }) {
  return (
    <div>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <Link to={`/blog/${blog.id}`} key={blog.id}>
            <BlogItem blog={blog} />
          </Link>
        ))
      ) : (
        <p>No blogs found.</p>
      )}
    </div>
  );
}
