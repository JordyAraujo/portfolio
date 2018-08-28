import React, { Component } from "react";
import "./PhotoGrid.css";

class PhotoGrid extends Component {
  render() {
    return (
      <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
        <div className="w3-half">
          <div className="container">
            <button
              id="btn2013"
              text="XIX Competição Baja SAE Brasil"
              className="overlay text"
              style={{ cursor: "pointer" }}
            />
            <img
              src="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2013.jpg"
              alt="Baja 2013"
              style={{ width: "100%" }}
            />
          </div>

          <div className="container">
            <button
              id="btnWSU"
              text="Wayne State University"
              className="overlay text"
            />
            <img
              src="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/wsu.jpg"
              alt="Wayne State University"
              style={{ width: "100%" }}
            />
          </div>

          <div className="container">
            <button
              id="btn2016"
              text="XXII Competição Baja SAE Brasil"
              className="overlay text"
            />
            <img
              src="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2016.jpg"
              alt="Baja 2016"
              style={{ width: "100%" }}
            />
          </div>
        </div>

        <div className="w3-half">
          <div className="container">
            <button
              id="btn2014"
              text="XX Competição Baja SAE Brasil"
              className="overlay text"
            />
            <img
              src="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2014.jpg"
              alt="Baja 2014"
              style={{ width: "100%" }}
            />
          </div>

          <div className="container">
            <button
              id="btnMIT"
              text="Massachusetts Institute of Technology"
              className="overlay text"
            />
            <img
              src="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/mit.jpg"
              alt="Massachusetts Institute Of Technology"
              style={{ width: "100%" }}
            />
          </div>

          <div className="container">
            <button
              id="btnAresta"
              text="Estágio na Aresta 3D"
              className="overlay text"
            />
            <img
              src="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/aresta.jpg"
              alt="Aresta 3D"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoGrid;
