import { useState } from "react";
import blogData from "../assets/blog.json";
import BlogList from "../components/BlogList";

export default function HomePage() {
  const [blogs, setBlogs] = useState(blogData);

  return (
    <div>
      <h1>This is the Homepage</h1>
      <div className="flex justify-between mt-12">
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
}
