export default function BlogItem({ blog }) {
  return (
    <div className="flex shadow-lg rounded-lg h-96 mb-14">
      <div className="w-1/2 h-full">
        <img
          className="object-cover w-full h-full"
          src={blog.image}
          alt={blog.title}
        />
      </div>
      <div className="w-1/2 flex flex-col h-full bg-white py-6 px-8">
        <div className="flex gap-4 mb-8">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img src={blog.authorIcon} />
          </div>
          <div>
            <p>{blog.author}</p>
            <div className="flex items-center gap-3">
              <p>{blog.date}</p>
              <div className="w-1 h-1 bg-black rounded-full mb-1"></div>
              <p>{blog.readingTime}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-between ">
          <div>
            <h2 className="font-futura text-4xl font-bold mb-3">
              {blog.title}
            </h2>
            <p className="text-lg mb-4">{blog.description}</p>
          </div>
          <div className="border-t border-gray-400 pt-3">
            <p>{blog.comments.length} comments</p>
          </div>
        </div>
      </div>
    </div>
  );
}
