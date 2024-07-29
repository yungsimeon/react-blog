import { useState } from "react";
import { createComment } from "./ApiQueries";

export default function CommentForm({ blogId, onCommentAdded }) {
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const commentData = {
        data: {
          commentAuthor,
          commentContent,
          blog: +blogId,
        },
      };
      await createComment(commentData);
      onCommentAdded(); // Refresh comments list
      setCommentAuthor("");
      setCommentContent("");
    } catch (err) {
      setError("Failed to submit comment");
    }
  };

  return (
    <div className="p-6 mb-20">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <textarea
            className="w-full bg-grey p-2 border border-dark_grey rounded-md focus:outline-none "
            type="text"
            name="comment"
            placeholder="Write a comment..."
            value={commentContent}
            required
            onChange={(e) => setCommentContent(e.target.value)}
          />
        </div>
        <div>
          <input
            className="w-full bg-grey p-2 border border-dark_grey rounded-md focus:outline-none "
            type="text"
            name="commentAuthor"
            placeholder="Your name..."
            value={commentAuthor}
            required
            onChange={(e) => setCommentAuthor(e.target.value)}
          />
        </div>
        <button
          className="bg-dark_grey text-white px-4 py-2 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
