/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
import React, { useState } from "react";

import "./CreateImage.css";
import axios from "@services/axios";

export default function CreateImage({ setNewImage }) {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPreviewUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description || !file) {
      return alert("You must provide all necessary data");
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("imageData", JSON.stringify({ description }));

    try {
      const result = await axios.post("image", formData);

      setNewImage(result.data);

      return alert("Image created with success!!");
    } catch (err) {
      console.error(err);
      return alert("Something bad happened");
    }
  };

  return (
    <div className="addpicture">
      <h1 className="addimg">Ajout Image</h1>
      <form onSubmit={handleSubmit} className="tabpicture">
        <label htmlFor="description">
          Description:
          <input
            type="text"
            placeholder="description image..."
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label htmlFor="file">
          Choisir une image:
          <input type="file" id="file" onChange={handleFileChange} />
        </label>
        {previewUrl && (
          <img src={previewUrl} alt="Preview" className="preview-image" />
        )}

        <button type="submit" className="btnSubmit">
          Créer Image
        </button>
      </form>
    </div>
  );
}
