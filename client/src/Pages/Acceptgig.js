import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/viewgigs.css";

class Acceptgig extends React.Component {
  state = {
    gig: {},
    isLoggedIn: false
  };

  componentDidMount() {
    let hash = this.props.location.hash;
    let gigID = hash.split("#")[1];
    console.log(gigID);
    axios
      .get("//localhost:3000/gig/accept/" + gigID)
      .then(res => {
        this.setState({ gig: res.data });
      })
      .catch(err => {
        console.log(err);
      });

    if (localStorage.getItem("token")) this.setState({ isLoggedIn: true });
    else console.log("does not exist");
  }

  render() {
    return (
      <section id="view-gig">
        {
          <div id="gig-card">
            <h2 id="title">
              {this.state.gig.owner ? this.state.gig.owner.name : " "}
            </h2>
            <p>
              <span>Email:</span>{" "}
              {this.state.gig.owner ? this.state.gig.owner.email : " "}
            </p>
          </div>
        }
        {this.state.isLoggedIn ? (
          <Link id="logout" to="/logout">
            Logout
          </Link>
        ) : (
          <div></div>
        )}
      </section>
    );
  }
}

export default Acceptgig;
