/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
import "./ManageProject.css";
import axios from "@services/axios";
import { useState, useEffect } from "react";
import CreateImage from "@components/CreateImage";
import LogoutButton from "./Logout";

export default function ManageProject() {
  const [projets, setProjets] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [lien, setLien] = useState("");
  const [image, setImage] = useState(null);

  const getProjets = async () => {
    try {
      const { data } = await axios.get("projet", { withCredentials: true });
      setProjets(data);
    } catch (err) {
      console.error(err.response.status);
      if (err.response.status === 401) {
        alert("You're not authenticated");
      } else if (err.response.status === 403) {
        alert("You're not authorized");
      }
    }
  };

  const addProjet = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("lien", lien);
      await axios.post("projet", formData, { withCredentials: true });
      setTitle("");
      setDescription("");
      setImage(null);
      setLien("");
      getProjets();
    } catch (err) {
      console.error(err.response.status);
      if (err.response.status === 401) {
        alert("You're not authenticated");
      } else if (err.response.status === 403) {
        alert("You're not authorized");
      }
    }
  };

  const deleteProjet = async (id) => {
    try {
      await axios.delete(`projet/${id}`, { withCredentials: true });
      getProjets();
    } catch (err) {
      console.error(err.response.status);
      if (err.response.status === 401) {
        alert("You're not authenticated");
      } else if (err.response.status === 403) {
        alert("You're not authorized");
      }
    }
  };

  const updateProjet = async (id) => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("lien", lien);
      await axios.put(`projet/${id}`, formData, { withCredentials: true });
      setTitle("");
      setDescription("");
      setImage(null);
      setLien("");
      getProjets();
    } catch (err) {
      console.error(err.response.status);
      if (err.response.status === 401) {
        alert("You're not authenticated");
      } else if (err.response.status === 403) {
        alert("You're not authorized");
      }
    }
  };

  useEffect(() => {
    getProjets();
  }, []);

  return (
    <>
      <CreateImage />
      <div className="Manage-Projects">
        <form className="AjoutProjet">
          <h1>Ajout Projet</h1>
          <input
            type="text"
            placeholder="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <input
            type="text"
            placeholder="Lien"
            value={lien}
            onChange={(e) => setLien(e.target.value)}
          />
          <button type="button" onClick={addProjet} className="btnadd">
            Ajout Projet
          </button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Description</th>
              <th>Image</th>
              <th>Lien</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projets.map((projet) => (
              <tr key={projet.id}>
                <td>{projet.title}</td>
                <td>{projet.description}</td>
                <td>
                  <img src={projet.image_id} alt={projet.title} />
                </td>
                <td>
                  <a href={projet.lien}>{projet.lien}</a>
                </td>
                <td>
                  <button type="button" onClick={() => deleteProjet(projet.id)}>
                    Supprimer
                  </button>
                  <button type="button" onClick={() => updateProjet(projet.id)}>
                    Mettre a jour
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <LogoutButton />
      </div>
    </>
  );
}
