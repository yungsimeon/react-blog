import { useState, useEffect } from "react";
import { getLikeCount, updateLikeCount } from "./ApiQueries";

function LikeButton({ blogId }) {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    getLikeCount(blogId)
      .then(setLikes)
      .catch((error) => console.error(error));

    const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
    setHasLiked(likedPosts.includes(blogId));
  }, [blogId]);

  const handleLikeToggle = () => {
    const newLikes = hasLiked ? likes - 1 : likes + 1;

    updateLikeCount(blogId, newLikes)
      .then(() => {
        setLikes(newLikes);
        setHasLiked(!hasLiked);

        const likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || [];
        if (hasLiked) {
          localStorage.setItem(
            "likedPosts",
            JSON.stringify(likedPosts.filter((id) => id !== blogId))
          );
        } else {
          likedPosts.push(blogId);
          localStorage.setItem("likedPosts", JSON.stringify(likedPosts));
        }
      })
      .catch((error) => console.error("Error toggling like:", error));
  };

  return (
    <div>
      <button
        onClick={handleLikeToggle}
        className={`like-button ${hasLiked ? "liked" : ""} flex items-center space-x-2 p-2 bg-transparent text-black rounded`}
      >
        {hasLiked ? "Unlike" : "Like"} ({likes})
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="red"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.172 5.172a4 4 0 015.656 0L12 8.343l3.172-3.171a4 4 0 115.656 5.656L12 21.172l-8.828-8.828a4 4 0 010-5.656z"
          />
        </svg>
      </button>
    </div>
  );
}

export default LikeButton;
