import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import CircularProgress from "@mui/joy/CircularProgress";
import { fetchAllBlogPosts } from "../components/ApiQueries";

export default function HomePage() {
  const [blogs, setBlogs] = useState([]);
  const [originalBlogs, setOriginalBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllBlogPosts()
      .then((data) => {
        setOriginalBlogs(data);
        setBlogs(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blog posts:", err);
        setError("Failed to fetch blog posts.");
        setIsLoading(false);
      });
  }, []);

  const filterPosts = (category) => {
    if (category === "all") {
      setBlogs(originalBlogs);
    } else {
      const filteredPosts = originalBlogs.filter((blog) => {
        const tags = blog.attributes.blogTag;
        return tags.includes(category);
      });
      setBlogs(filteredPosts);
    }
  };

  return (
    <div className="px-96 mt-20">
      <h1 className="text-center font-futura font-medium text-7xl">Blog</h1>

      {isLoading ? (
        <CircularProgress color="neutral" variant="plain" />
      ) : (
        <div>
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
      )}
    </div>
  );
}
