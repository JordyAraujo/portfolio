import React, { Component } from "react";
import "./ImgLoader.css";

class ImgLoader extends Component {
  render() {
    return (
      <img
        alt={this.props.imgAlt}
        src={this.props.imgSrc}
        style={{ width: "100%" }}
      />
    );
  }
}

export default ImgLoader;
