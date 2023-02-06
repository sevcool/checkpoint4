/* eslint-disable import/no-unresolved */
import "@pages/Admin.css";
import Navbar from "@components/Navbar";

import ManageProject from "@components/ManageProject";

function Admin() {
  return (
    <div className="Admin">
      <Navbar />
      <ManageProject />
    </div>
  );
}

export default Admin;
