import { Link } from "react-router-dom";
import "@components/Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="navbar_links">
        <li className="Accueil">
          <Link to="/">Homepage</Link>
        </li>
        <li className="Projet">
          <Link to="/projet">Projet</Link>
        </li>
        <li className="Login">
          <Link to="/login">Login</Link>
        </li>
        <li className="Admin">
          <Link to="/admin">Admin</Link>
        </li>
        <li className="Contact">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
