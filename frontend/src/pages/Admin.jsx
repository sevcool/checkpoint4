import "@pages/Admin.css";
import Navbar from "@components/Navbar";

function Admin() {
  return (
    <div className="Admin">
      <NaVBar />
      <button type="button" className="btnaccueil">
        Ajouter un projet
      </button>
      <button type="button" className="btnaccueil">
        Supprimer un projet
      </button>
    </div>
  );
}

export default Admin;
