import React, { Component } from "react";
import "./Portfolio.css";
import PhotoGrid from './grid/PhotoGrid';

class Portfolio extends Component {

  constructor() {
    super();
    this.state = {
      modalBaja2013: 'none',
      modalBaja2014: 'none',
      modalBaja2016: 'none',
      modalMIT: 'none',
      modalWSU: 'none',
      modalAresta: 'none',
      modalcpNatal: 'none',
      isOpen: false
    };
  }

  handleClickBaja2013(){
    const display2013 = this.state.modalBaja2013;
    if (display2013 === "none") {
      this.setState({
        ...this.state,
        modalBaja2013: 'block',
        isOpen: true
      });
    }
  }

  handleClickBaja2014(){
    const display2014 = this.state.modalBaja2014;
    if (display2014 === "none") {
      this.setState({
        ...this.state,
        modalBaja2014: 'block',
        isOpen: true
      });
    }
  }

  handleClickBaja2016(){
    const display2016 = this.state.modalBaja2016;
    if (display2016 === "none") {
      this.setState({
        ...this.state,
        modalBaja2016: 'block',
        isOpen: true
      });
    }
  }

  handleClickMIT(){
    const displayMIT = this.state.modalMIT;
    if (displayMIT === "none") {
      this.setState({
        ...this.state,
        modalMIT: 'block',
        isOpen: true
      });
    }
  }

  handleClickWSU(){
    const displayWSU = this.state.modalWSU;
    if (displayWSU === "none") {
      this.setState({
        ...this.state,
        modalWSU: 'block',
        isOpen: true
      });
    }
  }

  handleClickAresta(){
    const displayAresta = this.state.modalAresta;
    if (displayAresta === "none") {
      this.setState({
        ...this.state,
        modalAresta: 'block',
        isOpen: true
      });
    }
  }

  handleClickcpNatal(){
    const displaycpNatal = this.state.modalcpNatal;
    if (displaycpNatal === "none") {
      this.setState({
        ...this.state,
        modalcpNatal: 'block',
        isOpen: true
      });
    }
  }

  handleClickCloseModal() {
    const isOpen = this.state.isOpen;
    if (isOpen === true) {
      this.setState({
        modalBaja2013: 'none',
      modalBaja2014: 'none',
      modalBaja2016: 'none',
      modalMIT: 'none',
      modalWSU: 'none',
      modalAresta: 'none',
      modalcpNatal: 'none',
      isOpen: false
      });
    }
  }

  render() {
    return (
      <div className="w3-padding-32 w3-content" id="portfolio">
        <h2 className="w3-text-grey">Portfólio</h2>
        <hr className="w3-opacity" />
        <PhotoGrid
          modalBaja2013={this.state.modalBaja2013}
          modalBaja2014={this.state.modalBaja2014}
          modalBaja2016={this.state.modalBaja2016}
          modalMIT={this.state.modalMIT}
          modalWSU={this.state.modalWSU}
          modalAresta={this.state.modalAresta}
          modalcpNatal={this.state.modalcpNatal}
          onClickBaja2013={() => this.handleClickBaja2013()}
          onClickBaja2014={() => this.handleClickBaja2014()}
          onClickBaja2016={() => this.handleClickBaja2016()}
          onClickMIT={() => this.handleClickMIT()}
          onClickWSU={() => this.handleClickWSU()}
          onClickAresta={() => this.handleClickAresta()}
          onClickcpNatal={() => this.handleClickcpNatal()}
          onClickClose={() => this.handleClickCloseModal()}
        />
      </div>
    );
  }
}

export default Portfolio;
