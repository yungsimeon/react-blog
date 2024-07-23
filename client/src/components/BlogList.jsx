import { Link } from "react-router-dom";
import BlogItem from "./BlogItem";

export default function BlogList({ blogs }) {
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
