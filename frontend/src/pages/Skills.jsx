/* eslint-disable import/no-unresolved */
import "@pages/Skills.css";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import html from "@assets/images/html-5.png";
import css from "@assets/images/css.png";
import js from "@assets/images/js.jpg";
import react from "@assets/images/react.png";
import nodejs from "@assets/images/nodejs.png";
import mysql from "@assets/images/mysql.png";

function Skills() {
  return (
    <>
      <Navbar />
      <div className="competences">
        <img src={html} alt="html" className="html" />
        <p className="skilltext">Html</p>
        <img src={css} alt="css" className="css" />
        <p className="skilltext">Css</p>
        <img src={js} alt="js" className="js" />
        <p className="skilltext">Javascript</p>
        <img src={react} alt="react" className="react" />
        <p className="skilltext">React</p>
        <img src={nodejs} alt="nodejs" className="nodejs" />
        <p className="skilltext">Node Js</p>
        <img src={mysql} alt="mysql" className="mysql" />
        <p className="skilltext">Mysql</p>
        <Footer />
      </div>
    </>
  );
}

export default Skills;
