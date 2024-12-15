export default function BlogItem({ blog }) {
  const API_URL = "http://localhost:1337";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="flex shadow-lg rounded-lg h-96 mb-14">
      <div className="w-1/2 h-full">
        <img
          className="object-cover w-full h-full"
          src={`${API_URL}${blog.attributes.blogImage.data.attributes.url}`}
          alt={blog.attributes.blogTitle}
        />
      </div>
      <div className="w-1/2 flex flex-col h-full bg-white py-6 px-8">
        <div className="flex gap-4 mb-8">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            {blog.attributes.blogIconImg && (
              <img
                src={`${API_URL}${blog.attributes.blogIconImg.data.attributes.url}`}
                alt={blog.attributes.blogAuthor}
              />
            )}
          </div>
          <div>
            <p>{blog.attributes.blogAuthor}</p>
            <div className="flex items-center gap-3">
              <p>{formatDate(blog.attributes.createdAt)}</p>
              <div className="w-1 h-1 bg-black rounded-full mb-1"></div>
              <p>{blog.attributes.blogReadingTime}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-between ">
          <div>
            <h2 className="font-futura text-4xl font-bold mb-3">
              {blog.attributes.blogTitle}
            </h2>
            <p className="text-lg mb-4">{blog.attributes.blogDescription}</p>
          </div>
          <div className="border-t border-gray-400 pt-3">
            <p>{blog.attributes.comments.data.length} comments</p>
          </div>
        </div>
      </div>
    </div>
  );
}
