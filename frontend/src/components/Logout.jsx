/* eslint-disable import/no-unresolved */
import "./Logout.css";

function LogoutButton() {
  const handleLogout = () => {
    // handle logout logic here, such as removing token from local storage
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <button type="button" onClick={handleLogout} className="logout">
      Deconnexion
    </button>
  );
}

export default LogoutButton;
