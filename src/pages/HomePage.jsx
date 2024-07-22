import BlogList from "../components/BlogList";

export default function HomePage() {
  return (
    <div>
      <h1>This is the Homepage</h1>
      <BlogList blogs={blogs} />
    </div>
  );
}
