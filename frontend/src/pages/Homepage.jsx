/* eslint-disable import/no-unresolved */
import sev from "@assets/images/sev2.png";
import "./Homepage.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <div className="Homepage">
        <div className="Homepage-content">
          <img src={sev} alt="sev" className="sev" />
          <div className="Homepage-text">
            <h1 className="PresTitle">Qui suis je </h1>
            <p className="Presentation">
              Les vingt années passées au service de La Poste m'ont permis
              d'acquérir rigueur, esprit d'équipe, sens du service client et je
              souhaite desormais mettre ces compétences au service du métier de
              Developpeur Web pour lequel je me passionne.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Homepage;
