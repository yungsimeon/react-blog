export default function BlogItem({ blog }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6 mb-4">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{blog.title}</h2>
      <p className="text-gray-600 mb-4">{blog.description}</p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-30 h-auto object-cover rounded-md"
      />
    </div>
  );
}
