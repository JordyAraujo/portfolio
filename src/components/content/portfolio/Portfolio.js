import React, { Component } from "react";
import "./Portfolio.css";
import PhotoGrid from './grid/PhotoGrid';

class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      
    };
  }

  handleClickBaja2013(){
    
  }

  handleClickBaja2014(){
    
  }

  handleClickBaja2016(){
    
  }

  handleClickMIT(){
    
  }

  handleClickWSU(){
    
  }

  handleClickAresta(){
    
  }

  render() {
    return (
      <div className="w3-padding-32 w3-content" id="portfolio">
        <h2 className="w3-text-grey">Portfólio</h2>
        <hr className="w3-opacity" />
        <PhotoGrid
          onClickBaja2013={() => this.handleClickBaja2013()}
          onClickBaja2014={() => this.handleClickBaja2014()}
          onClickBaja2016={() => this.handleClickBaja2016()}
          onClickMIT={() => this.handleClickMIT()}
          onClickWSU={() => this.handleClickWSU()}
          onClickAresta={() => this.handleClickAresta()}
        />
      </div>
    );
  }
}

export default Portfolio;
