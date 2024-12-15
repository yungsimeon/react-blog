import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/x";
import "react-social-icons/instagram";
import "react-social-icons/linkedin";

export default function Footer() {
  return (
    <footer className="bg-white shadow-top text-black py-4 mt-10  w-full flex justify-between items-center px-6">
      <span className="flex-grow text-center">&copy; 2024</span>
      <div className="flex space-x-4">
        <SocialIcon bgColor="#333" target="_blank" url="https://x.com" />
        <SocialIcon
          bgColor="#333"
          target="_blank"
          url="https://instagram.com"
        />
        <SocialIcon bgColor="#333" target="_blank" url="https://linkedin.com" />
      </div>
    </footer>
  );
}
