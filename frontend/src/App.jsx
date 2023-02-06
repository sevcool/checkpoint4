/* eslint-disable import/no-unresolved */
import { Routes, Route } from "react-router-dom";
import Homepage from "@pages/Homepage";
import Login from "@pages/Login";
import Admin from "@pages/Admin";
import Contact from "@pages/Contact";
import Projet from "@pages/Projet";
import Skills from "@pages/Skills";
import "./App.css";
import NotFound from "@pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
