import { useState, useEffect } from "react";
import blogData from "../assets/blog.json";
import BlogList from "../components/BlogList";

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);

  const [originalBlogs, setOriginalBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogData);
    setOriginalBlogs(blogData);
  }, []);

  const filterPosts = (category) => {
    if (category === "all") {
      setBlogs(originalBlogs);
    } else {
      const filteredPosts = originalBlogs.filter(
        (blog) => blog.category === category
      );
      setBlogs(filteredPosts);
    }
  };

  return (
    <div className="px-96 mt-20">
      <h1 className="text-center font-futura font-medium text-7xl">Blog</h1>
      <div className="flex text-xl gap-4 mt-20 z-2">
        <button
          onClick={() => filterPosts("all")}
          className="transform transition-transform duration-300 ease-in-out hover:translate-y-1 hover:text-custom"
        >
          All Posts
        </button>
        <button
          onClick={() => {
            filterPosts("Travel");
          }}
          className="transform transition-transform duration-300 ease-in-out hover:translate-y-1 hover:text-custom"
        >
          Travel
        </button>
        <button
          onClick={() => filterPosts("Movies")}
          className="transform transition-transform duration-300 ease-in-out hover:translate-y-1 hover:text-custom"
        >
          Movies
        </button>
        <button
          onClick={() => filterPosts("Music")}
          className="transform transition-transform duration-300 ease-in-out hover:translate-y-1 hover:text-custom"
        >
          Music
        </button>
      </div>
      <div className="mt-12">
        <BlogList blogs={blogs} />
      </div>
    </div>
  );
}
