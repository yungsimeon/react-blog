import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-white text-lg font-semibold hover:text-gray-400"
        >
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
