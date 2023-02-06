/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
// eslint-disable-next-line import/no-unresolved
import logo from "@assets/images/logo90x51.png";

export default function Navbar() {
  const [show, setShow] = useState(false);

  function showSwitch() {
    return setShow(!show);
  }

  return (
    <div className="navbar">
      <div className="logo">
        <Link onClick={() => showSwitch()} to="/login">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={show ? "links active" : "links"}>
        <Link onClick={() => showSwitch()} to="/">
          Accueil
        </Link>
        <Link onClick={() => showSwitch()} to="/skills">
          Compétences
        </Link>
        <Link onClick={() => showSwitch()} to="/projet">
          Projets
        </Link>
        <Link onClick={() => showSwitch()} to="/contact">
          Contact
        </Link>
      </div>

      <div
        onClick={() => showSwitch()}
        className={show ? "bars-button active" : "bars-button"}
      >
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}
