import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const handleLogin = e => {
    e.preventDefault();
    axios.post("/user/login", { email, password }).then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.user._id);
      props.history.push("/gigs");
    });
  };
  return (
    <section className="form">
      <h2 className="title">Log In:</h2>
      <form id="log-in" onSubmit={handleLogin}>
        <label>Email or Username:</label>
        <input type="text" required onChange={e => setEmail(e.target.value)} />
        <label>Password :</label>
        <input
          type="password"
          required
          onChange={e => setPass(e.target.value)}
        />

        <input type="submit" className="btn" />
        <Link to="/signup">New here? Sign Up!</Link>
      </form>
    </section>
  );
}

export default Login;
