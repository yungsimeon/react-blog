export default function BlogItem({ blog }) {
  const API_URL = "http://localhost:1337";

  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-4"
      key={blog.id}
    >
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{blog.title}</h2>
      <p className="text-gray-600 mb-4">{blog.attributes.blogTitle}</p>
      <img
        src={`${API_URL}${blog.attributes.blogImage.data.attributes.url}`}
        alt={blog.attributes.blogTitle}
        className="w-30 h-auto object-cover rounded-md"
      />
    </div>
  );
}
