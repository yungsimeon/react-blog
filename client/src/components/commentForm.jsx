import { useState } from "react";
import { createComment } from "../components/ApiQueries";

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
        },
      };
      await createComment(blogId, commentData);
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
        <div className="mb-4">
          <label
            htmlFor="commentAuthor"
            className="block text-gray-700 font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="commentAuthor"
            value={commentAuthor}
            onChange={(e) => setCommentAuthor(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="commentContent"
            className="block text-gray-700 font-bold mb-2"
          >
            Comment
          </label>
          <textarea
            id="commentContent"
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
