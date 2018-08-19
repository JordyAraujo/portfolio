import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        className="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge"
        style={{ margin: "-24px" }}
      >
        <a href="https://www.facebook.com/jordyaraujo" className="btnSocial">
          <i className="fa fa-facebook-official w3-hover-opacity" />
        </a>
        <a
          href="https://www.instagram.com/jordy_araujo"
          className="btnSocial"
          style={{ padding: "10px" }}
        >
          <i className="fa fa-instagram w3-hover-opacity"> </i>
        </a>
        <a href="https://www.linkedin.com/in/jordyaraujo" className="btnSocial">
          <i className="fa fa-linkedin w3-hover-opacity" />
        </a>
        <p className="w3-medium">
          Powered by
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            className="w3-hover-text-green"
            style={{ padding: "5px" }}
          >
            w3.css
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
