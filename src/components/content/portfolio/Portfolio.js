import React, { Component } from "react";
import "./Portfolio.css";
import PhotoGrid from './grid/PhotoGrid';

class Portfolio extends Component {
  render() {
    return (
      <div className="w3-padding-32 w3-content" id="portfolio">
        <h2 className="w3-text-grey">Portfólio</h2>
        <hr className="w3-opacity" />
        <PhotoGrid imgColor='imgcolor' />
      </div>
    );
  }
}

export default Portfolio;
