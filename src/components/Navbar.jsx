import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        <p> Home</p>
      </NavLink>

      <NavLink to="/about">
        <p> About</p>
      </NavLink>
      <NavLink to="/contact">
        <p>Contact</p>
      </NavLink>
    </nav>
  );
}
