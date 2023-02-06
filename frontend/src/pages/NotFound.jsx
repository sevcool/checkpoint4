/* eslint-disable import/no-unresolved */
import { Link } from "react-router-dom";
import "./NotFound.css";

import arrowkeys from "@assets/images/arrowkeys.png";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="Error">
        <h1 className="lost">Vous semblez perdu</h1>

        <Link to="/">Retour a l'accueil</Link>

        <img src={arrowkeys} alt="fleches" className="arrowkeys" />
      </div>
      <Footer />
    </>
  );
}
