import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import { useState } from "react";

export default function BlogPostPage({ blogs }) {
  const { blogId } = useParams();
  const blogPost = blogs.find((blog) => String(blog.id) === String(blogId));
  const [comments, setComments] = useState([]);
  const addComment = (comment, commentAuthor) => {
    setComments([
      ...comments,
      { comment, commentAuthor, id: comments.length + 1 },
    ]);
  };

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div className="h-full px-96 mt-40">
      <div className="flex gap-4 mb-8 items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={blogPost.authorIcon} />
        </div>

        <p>{blogPost.author}</p>
        <div className="flex items-center gap-3">
          <div className="w-1 h-1 bg-black rounded-full mb-1"></div>
          <p>{blogPost.date}</p>
          <div className="w-1 h-1 bg-black rounded-full mb-1"></div>
          <p>{blogPost.readingTime}</p>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="font-futura text-4xl font-bold mb-3">
          {blogPost.title}
        </h2>
        <p className="text-2xl mb-4">{blogPost.description}</p>
      </div>
      <div className="w-full h-full mb-10">
        <img
          className="object-cover w-full h-full"
          src={blogPost.image}
          alt={blogPost.title}
        />
      </div>
      <div className="mb-10 pb-10 border-b border-gray-400">
        <p className="text-lg">{blogPost.content}</p>
      </div>

      <div>
        {comments.map((comment) => {
          return (
            <div
              key={comment.id}
              className="rounded-lg border border-dark_grey p-4 mb-4"
            >
              <p className="text-gray-800 text-lg  font-medium mb-2">
                {comment.comment}
              </p>
              <p className="text-gray-600 text-sm">{comment.commentAuthor}</p>
            </div>
          );
        })}
      </div>
      <CommentForm addComment={addComment} />
    </div>
  );
}
