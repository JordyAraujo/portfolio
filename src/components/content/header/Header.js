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

        <ResumeDownload />
      </header>
    );
  }
}

export default Header;
