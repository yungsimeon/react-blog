import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-white text-lg font-semibold hover:text-gray-400"
        >
          <img
            src="https://www.shutterstock.com/image-vector/vinnytsia-ukraine-may-7-2023-260nw-2299584411.jpg"
            alt="Logo"
            className="h-8 ml-[-45px]"
          />
          Home
        </NavLink>

        <NavLink to="/about" className="text-white text-lg hover:text-gray-400">
          About
        </NavLink>

        <NavLink
          to="/contact"
          className="text-white text-lg hover:text-gray-400"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
