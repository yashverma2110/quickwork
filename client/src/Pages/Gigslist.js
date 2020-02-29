import React, { Component } from "react";
import axios from "axios";
import "../styles/gigslist.css";
import { Link } from "react-router-dom";

class Gigs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gigs: []
    };
  }
  componentDidMount() {
    axios
      .get("//localhost:3000/gig/viewall")
      .then(res => {
        this.setState({ gigs: res.data });
      })
      .catch(err => {
        console.log(err);
      });

    if (localStorage.getItem("token")) this.setState({ isLoggedIn: true });
    else console.log("does not exist");
  }
  render() {
    return (
      <section id="gig-cards-list">
        {this.state.gigs.map(function(e) {
          return (
            <div key={e._id} className="gig-card">
              <div>
                <h2>{e.title}</h2>
                <p>{e.description}</p>
                <h4>Offer: Rs.{e.offer}</h4>
              </div>
              <Link to={`viewgig#${e._id}`}>View</Link>
            </div>
          );
        })}
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

export default Gigs;
