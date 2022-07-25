import { Routes, Route } from "react-router-dom";
import Homepage from "@pages/Homepage";
import Login from "@pages/Login";
import Admin from "@pages/Admin";
import Contact from "@pages/Contact";
import Projet from "@pages/Projet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
