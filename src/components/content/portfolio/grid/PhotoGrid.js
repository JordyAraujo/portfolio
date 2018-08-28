import React, { Component } from "react";
import PhotoButton from "./PhotoButton";
import "./PhotoGrid.css";
import ImgLoader from "./ImgLoader";

class PhotoGrid extends Component {
  constructor() {
    super();
    this.state = {
      colorBaja2013: "imgpb",
      colorWSU: "imgpb",
      colorBaja2016: "imgpb",
      colorBaja2014: "imgpb",
      colorMIT: "imgpb",
      colorAresta: "imgpb"
    };
  }

  handleEnterBaja2013() {
    this.setState({
      ...this.state,
      colorBaja2013: "imgcolor"
    });
  }

  handleEnterWSU() {
    this.setState({
      ...this.state,
      colorWSU: "imgcolor"
    });
  }

  handleEnterBaja2016() {
    this.setState({
      ...this.state,
      colorBaja2016: "imgcolor"
    });
  }

  handleEnterBaja2014() {
    this.setState({
      ...this.state,
      colorBaja2014: "imgcolor"
    });
  }

  handleEnterMIT() {
    this.setState({
      ...this.state,
      colorMIT: "imgcolor"
    });
  }

  handleEnterAresta() {
    this.setState({
      ...this.state,
      colorAresta: "imgcolor"
    });
  }

  handleLeave() {
    this.setState({
      colorBaja2013: "imgpb",
      colorWSU: "imgpb",
      colorBaja2016: "imgpb",
      colorBaja2014: "imgpb",
      colorMIT: "imgpb",
      colorAresta: "imgpb"
    });
  }

  render() {
    return (
      <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
        <div className="w3-half">
          <div className="container">
            <ImgLoader
              imgSrc="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2013.jpg"
              imgColor={this.state.colorBaja2013}
              imgAlt="Baja 2013"
            />
            <PhotoButton
              onEnter={() => this.handleEnterBaja2013()}
              onLeave={() => this.handleLeave()}
              id="btn2013"
              text="XIX Competição Baja SAE Brasil"
            />
          </div>

          <div className="container">
            <ImgLoader
              imgSrc="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/wsu.jpg"
              imgColor={this.state.colorWSU}
              imgAlt="Wayne State University"
            />
            <PhotoButton
              onEnter={() => this.handleEnterWSU()}
              onLeave={() => this.handleLeave()}
              id="btnWSU"
              text="Wayne State University"
            />
          </div>

          <div className="container">
            <ImgLoader
              imgSrc="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2016.jpg"
              imgColor={this.state.colorBaja2016}
              imgAlt="Baja 2016"
            />
            <PhotoButton
              onEnter={() => this.handleEnterBaja2016()}
              onLeave={() => this.handleLeave()}
              id="btn2016"
              text="XXII Competição Baja SAE Brasil"
            />
          </div>
        </div>

        <div className="w3-half">
          <div className="container">
            <ImgLoader
              imgSrc="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2014.jpg"
              imgColor={this.state.colorBaja2014}
              imgAlt="Baja 2014"
            />
            <PhotoButton
              onEnter={() => this.handleEnterBaja2014()}
              onLeave={() => this.handleLeave()}
              id="btn2014"
              text="XX Competição Baja SAE Brasil"
            />
          </div>

          <div className="container">
            <ImgLoader
              imgSrc="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/mit.jpg"
              imgColor={this.state.colorMIT}
              imgAlt="Massachusetts Institute Of Technology"
            />
            <PhotoButton
              onEnter={() => this.handleEnterMIT()}
              onLeave={() => this.handleLeave()}
              id="btnMIT"
              text="Massachusetts Institute of Technology"
            />
          </div>

          <div className="container">
            <ImgLoader
              imgSrc="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/aresta.jpg"
              imgColor={this.state.colorAresta}
              imgAlt="Aresta 3D"
            />
            <PhotoButton
              onEnter={() => this.handleEnterAresta()}
              onLeave={() => this.handleLeave()}
              id="btnAresta"
              text="Estágio na Aresta 3D"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoGrid;
