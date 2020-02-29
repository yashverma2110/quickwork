import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/show-pass.css";

class Signup extends React.Component {
  state = {
    showPass: true,
    name: "",
    email: "",
    password: "",
    err: false,
    msg: false
  };

  componentDidMount() {
    let hash = this.props.location.hash;
    let msg = hash.split("#")[1];
    if (msg) this.setState({ msg: true });
  }

  handleSubmit = e => {
    e.preventDefault();

    let { name, email, password } = this.state;
    axios
      .post("/user/signup", {
        name: name,
        email: email,
        password: password
      })
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/");
      })
      .catch(err => {
        alert("Please check username or password");
      });
  };

  render() {
    return (
      <section className="form">
        <h2 className="title">Sign Up:</h2>
        {<h3 id="msg">{this.state.msg ? "Please Signup first" : ""}</h3>}
        <form id="log-in" onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input
            type="text"
            required
            name="name"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <label>Email:</label>
          <input
            type="email"
            required
            email="email"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <div id="show-pass">
            <label style={{ paddingBottom: "10px" }}>Password</label>
            <input
              type={this.state.showPass ? "password" : "text"}
              required
              onChange={e => this.setState({ password: e.target.value })}
            />
            <div id="check-box">
              <input
                id="check"
                type="checkbox"
                onClick={() =>
                  this.setState({ showPass: !this.state.showPass })
                }
              />
              <label>Show Password</label>
            </div>
          </div>
          <input type="submit" className="btn" />
          <Link to="/login">Already have an account? Login</Link>
        </form>
      </section>
    );
  }
}

export default Signup;
