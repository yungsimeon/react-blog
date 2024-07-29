import { Typography } from "@material-tailwind/react";
import TeamList from "../components/TeamList";

export default function AboutPage({ members }) {
  return (
    <section className="h-full py-8 px-8 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-28">
          <Typography
            variant="h1"
            color="blue-gray"
            className="my-2 mb-10 font-futura !text-2xl lg:!text-4xl"
          >
            About the project
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 max-w-4xl"
          >
            Our project is a dynamic blogging platform designed to offer a
            seamless user experience for both reading and interacting with blog
            content. Users can browse through various blog posts and filter them
            by category for a more personalized experience. Each blog post
            allows users to leave comments, fostering engagement and discussion.
            For our backend, we utilized Strapi, which enabled us to efficiently
            create and manage the blog fields, ensuring a robust and flexible
            content management system. This setup allows for easy scalability
            and customization, enhancing the overall functionality and user
            experience of the blog.
          </Typography>
        </div>
        <div className="flex-col items-center justify-center">
          <Typography
            variant="h6"
            color="blue-gray"
            className="font-futura text-center mb-10 text-xl"
          >
            Meet the Team
          </Typography>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TeamList members={members} />
          </div>
        </div>
      </div>
    </section>
  );
}
