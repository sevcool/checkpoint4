import sev from "@assets/images/sevcartoon.jpg";
import "./Homepage.css";
import Navbar from "@components/Navbar";

function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <div className="Homepage-content">
        <img src={sev} alt="sev" className="sev" />
        <div className="Homepage-text">
          <p>Qui suis je </p>
          <p className="Presentation">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur obcaecati quae odio voluptas atque accusantium laborum.
            Eaque, ratione expedita quos eum vitae repellat nulla quo!
            Consequuntur reiciendis quibusdam maiores quia.
          </p>
        </div>
      </div>
      {/* <div className="Btn">
        <button type="button" className="btnaccueil">
          Entrez sur le site
        </button>
      </div> */}
    </div>
  );
}

export default Homepage;
