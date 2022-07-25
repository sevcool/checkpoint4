import "@pages/Login.css";
import Navbar from "@components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "@services/axios";
import { userContext } from "../contexts/UserContext";

export default function Login() {
  const { dispatch } = userContext();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.password) {
      return alert("You must provide an email and a password");
    }
    try {
      const { data } = await axios.post("user/login", userData, {
        withCredentials: true,
      });
      // console.log(data);
      setUserData({ email: "", password: "" });
      dispatch({ type: "LOGIN", payload: data });
      if (data.role === "ADMIN") {
        return navigate("/Admin");
      }
      return null;
    } catch (err) {
      return alert(err.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login">
        <section className="login-container">
          <h1 className="login-title">Log in</h1>
          <form className="fields" onSubmit={handleSubmit}>
            <label className="label" htmlFor="email">
              Email:{" "}
              <input
                className="login-input"
                id="email"
                placeholder="your email"
                type="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </label>
            <label className="label" htmlFor="password">
              Password:{" "}
              <input
                className="login-input"
                id="password"
                placeholder="your password"
                type="password"
                value={userData.password}
                onChange={handleInputChange}
              />
            </label>
            <button className="login-btn" type="submit">
              Login
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
