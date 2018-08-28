import React, { Component } from "react";
import PhotoButton from "./PhotoButton";
import ImgLoader from "./ImgLoader";

class PhotoGrid extends Component {
  render() {
    return (
      <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
        <div className="w3-half">
          <div className="container">
            <ImgLoader
              imgSrc="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2013.jpg"
              imgAlt="Baja 2013"
            />
            <PhotoButton id="btn2013" text="XIX Competição Baja SAE Brasil" />
          </div>

          <div className="container">
            <ImgLoader
              imgSrc="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/wsu.jpg"
              imgAlt="Wayne State University"
            />
            <PhotoButton id="btnWSU" text="Wayne State University" />
          </div>

          <div className="container">
            <ImgLoader
              imgSrc="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2016.jpg"
              imgAlt="Baja 2016"
            />
            <PhotoButton id="btn2016" text="XXII Competição Baja SAE Brasil" />
          </div>
        </div>

        <div className="w3-half">
          <div className="container">
            <ImgLoader
              imgSrc="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2014.jpg"
              imgAlt="Baja 2014"
            />
            <PhotoButton id="btn2014" text="XX Competição Baja SAE Brasil" />
          </div>

          <div className="container">
            <ImgLoader
              imgSrc="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/mit.jpg"
              imgAlt="Massachusetts Institute Of Technology"
            />
            <PhotoButton
              id="btnMIT"
              text="Massachusetts Institute of Technology"
            />
          </div>

          <div className="container">
            <ImgLoader
              imgSrc="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/aresta.jpg"
              imgAlt="Aresta 3D"
            />
            <PhotoButton id="btnAresta" text="Estágio na Aresta 3D" />
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoGrid;
