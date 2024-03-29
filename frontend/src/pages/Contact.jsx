/* eslint-disable import/no-unresolved */
import "@pages/Contact.css";
import facebook from "@assets/images/facebook.png";
import insta from "@assets/images/instagram.png";
import git from "@assets/images/github.png";
import linkedin from "@assets/images/linkedin.png";
import twitter from "@assets/images/twitter.png";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import sev from "@assets/images/sev2.png";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="Contact">
        <ul className="reseaux-sociaux">
          <li>
            <img src={sev} alt="sevcontact" className="sevcontact" />
          </li>
          <li>
            <img src={facebook} alt="facebook" className="facebook" />
            <a href="https://www.facebook.com/coulangesv" target="blank">
              Facebook
            </a>
          </li>
          <li>
            <img src={insta} alt="insta" className="insta" />
            <a href="https://www.instagram.com/sevcoul" target="blank">
              Instagram
            </a>
          </li>
          <li>
            <img src={git} alt="git" className="git" />
            <a href="https://www.github.com/sevcool" target="blank">
              Github
            </a>
          </li>
          <li>
            <img src={linkedin} alt="linkedin" className="linkedin" />
            <a
              href="https://www.linkedin.com/in/severine-coulange-290a1520a"
              target="blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <img src={twitter} alt="twitter" className="twitter" />
            <a href="https://www.twitter.com/SeverineCoulsev" target="blank">
              Twitter
            </a>
          </li>
        </ul>

        <Footer />
      </div>
    </>
  );
}

export default Contact;
