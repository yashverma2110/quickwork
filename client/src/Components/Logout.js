import React from "react";
import axios from "axios";

export default class Logout extends React.Component {
  componentDidMount() {
    axios
      .request({
        url: "/user/logout",
        method: "post",
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then(res => {
        console.log("logged out");
      })
      .catch(err => {
        console.log(err);
      });
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    this.props.history.push("/");
  }
  render() {
    return <div></div>;
  }
}
