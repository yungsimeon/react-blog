import navAnimation from "../assets/icon.json";

import { Player } from "@lottiefiles/react-lottie-player";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-[#fff] 800 p-3 shadow-lg sticky z-10 top-0 ">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Player
            autoplay
            loop
            src={navAnimation}
            style={{ height: "100px", width: "100px" }}
          />
        </div>
        <div className="flex gap-10 text-black text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "relative text-gray-500 after:absolute after:left-0 after:bottom-[-0.5rem] after:w-full after:h-[3px] after:bg-gray-500"
                : "hover:text-gray-500"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "relative text-gray-500 after:absolute after:left-0 after:bottom-[-0.5rem] after:w-full after:h-[3px] after:bg-gray-500"
                : "hover:text-gray-500"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "relative text-gray-500 after:absolute after:left-0 after:bottom-[-0.5rem] after:w-full after:h-[3px] after:bg-gray-500"
                : "hover:text-gray-500"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
