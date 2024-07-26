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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Comment
          <textarea
            type="text"
            name="comment"
            placeholder="write a comment..."
            value={comment}
            onChange={(e) => handleChange(e, setComment)}
          />
        </label>
        <label>
          Author
          <input
            type="text"
            name="commentAuthor"
            placeholder="your name..."
            value={commentAuthor}
            onChange={(e) => handleChange(e, setCommentAuthor)}
          />
        </label>
        <button type="submit">send</button>
      </form>
    </div>
  );
}
