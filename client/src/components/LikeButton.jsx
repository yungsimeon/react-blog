
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
        className={`like-button ${hasLiked ? "liked" : ""} px-4 py-2 bg-blue-500 text-white rounded`}
      >
        {hasLiked ? "Unlike" : "Like"} ({likes})
      </button>
    </div>
  );
}

export default LikeButton;

