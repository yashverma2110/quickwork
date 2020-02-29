import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/viewgigs.css";

class ViewGig extends React.Component {
  state = {
    gig: {},
    isLoggedIn: false
  };
  componentDidMount() {
    let hash = this.props.location.hash;
    let gigID = hash.split("#")[1];
    axios
      .get("//localhost:3000/gig/view/" + gigID)
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
    const { gig } = this.state;
    return (
      <section id="view-gig">
        {
          <div key={gig._id} id="gig-card">
            <h2 id="title">{gig.title}</h2>
            <p>
              <span>Description:</span> {gig.description}
            </p>
            <p>
              <span>Offer:</span>
              Rs.{gig.offer}
            </p>
            <p>
              <span>Negotiable:</span> {gig.negotiable ? "Yes" : "No"}
            </p>
            <p style={{ marginBottom: "20px" }}>
              <span>DeadLine:</span> {gig.deadline}
            </p>
            <Link to={`acceptgig#${gig._id}`}>Accept</Link>
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

export default ViewGig;
