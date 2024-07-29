import { Card, CardBody, Avatar, Typography } from "@material-tailwind/react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import "react-social-icons/email";

export default function TeamItem({ member }) {
  return (
    <Card className="rounded-lg bg-[#FAFAFA]">
      <CardBody className="text-center">
        <Avatar
          src={member.img}
          variant="circular"
          size="xxl"
          className="mx-auto mb-6 object-top"
        />
        <Typography
          variant="h5"
          color="blue-gray"
          className="!font-medium text-lg"
        >
          {member.name}
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-2 !text-base !font-semibold text-gray-600"
        >
          {member.role}
        </Typography>
        <div className="flex mt-4 justify-center gap-4">
          <SocialIcon
            network="github"
            href={member.github}
            target="_blank"
            bgColor="#333"
            style={{ height: "40px", width: "40px" }}
            className="w-0.5"
          />
          <SocialIcon
            network="linkedin"
            href={member.linkedin}
            bgColor="#333"
            target="_blank"
            style={{ height: "40px", width: "40px" }}
          />
          <a
            href={`mailto:${member.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon
              network="email"
              style={{ height: "40px", width: "40px" }}
              bgColor="#333"
            />
          </a>
        </div>
      </CardBody>
    </Card>
  );
}
