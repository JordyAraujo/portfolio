import React, { Component } from "react";
import ResumeDownload from "../ResumeDownload";

class Header extends Component {
  render() {
    return (
      <header
        className="w3-container w3-center"
        style={{ padding: "128px 16px" }}
        id="home"
      >
        <h1 className="w3-jumbo">
          <b>Jordy Araújo</b>
        </h1>
        <p>Professional Maker</p>
        <img
          alt="Profile"
          src="https://jordyaraujo.github.io/static/media/profile.pb.png"
          className="w3-image w3-hide-large w3-hide-small w3-round"
          style={{ display: "block", width: "60%", margin: "auto" }}
        />
        <img
          alt="Profile"
          src="https://jordyaraujo.github.io/static/media/profile.pb.png"
          className="w3-image w3-hide-large w3-hide-medium w3-round"
          width="1000"
          height="1333"
        />

        <ResumeDownload />
      </header>
    );
  }
}

export default Header;
