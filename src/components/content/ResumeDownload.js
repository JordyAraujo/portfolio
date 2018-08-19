import React, { Component } from "react";

class ResumeButton extends Component {
  render() {
    return (
      <div>
        <a
          href="https://github.com/JordyAraujo/jordyaraujo.github.io/raw/master/resume.pdf"
          className="w3-button w3-light-grey w3-padding-large w3-margin-top"
        >
          <i className="fa fa-download" /> Baixar Currículo
        </a>
      </div>
    );
  }
}

export default ResumeButton;
