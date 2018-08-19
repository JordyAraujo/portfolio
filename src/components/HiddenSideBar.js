import React, { Component } from "react";

class HiddenSideBar extends Component {
  render() {
    return (
      <nav
        className="w3-sidebar w3-black w3-animate-right w3-xxlarge"
        style={this.props.styleHiddenSideBar}
        id="mySidebar"
      >
        <span
          onClick={this.props.onClickCloseNav}
          className="w3-button w3-black w3-xxxlarge w3-display-topright"
          style={{ padding: "0 12px" }}
        >
          <i className="fa fa-remove" />
        </span>
        <div className="w3-bar-block w3-center">
          <a
            href="#home"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={this.props.onClickCloseNav}
          >
            Início
          </a>
          <a
            href="#about"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={this.props.onClickCloseNav}
          >
            Sobre
          </a>
          <a
            href="#portfolio"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={this.props.onClickCloseNav}
          >
            Portfólio
          </a>
          <a
            href="#contact"
            className="w3-bar-item w3-button w3-text-grey w3-hover-black"
            onClick={this.props.onClickCloseNav}
          >
            Contato
          </a>
        </div>
      </nav>
    );
  }
}

export default HiddenSideBar;
