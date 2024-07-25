import { useState } from "react";

export default function CommentForm({ addComment }) {
  const [comment, setComment] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(comment, commentAuthor);
    setComment("");
    setCommentAuthor("");
  };

  const handleChange = (e, setState) => {
    setState(e.target.value);
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
            value={comment}
            onChange={(e) => handleChange(e, setComment)}
          />
        </div>
        <div>
          <input
            className="w-full bg-grey p-2 border border-dark_grey rounded-md focus:outline-none "
            type="text"
            name="commentAuthor"
            placeholder="Your name..."
            value={commentAuthor}
            onChange={(e) => handleChange(e, setCommentAuthor)}
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
