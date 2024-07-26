import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <button
      onClick={increment}
      className="flex items-center space-x-2 p-2 bg-transparent text-black rounded"
    >
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
      <span>{count}</span>
    </button>
  );
}
