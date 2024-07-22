export default function BlogItem({ blog }) {
  return (
    <div className="blog-item">
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <img src={blog.image} />
    </div>
  );
}
