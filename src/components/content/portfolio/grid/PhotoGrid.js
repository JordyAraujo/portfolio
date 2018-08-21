import React, { Component } from "react";
import PhotoButton from "./PhotoButton";
import "./PhotoGrid.css";

class PhotoGrid extends Component {
    render() {
        return (
            <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                <div className="w3-half">
                    <div className="container">
                        <img
                            alt="Baja 2013"
                            src="https://jordyaraujo.github.io/static/media/baja.2013.jpg"
                            className="image"
                            style={{ width: "100%" }}
                        />
                        <PhotoButton id="btn2013" text="XIX Competição Baja SAE Brasil" />
                    </div>

                    <div className="container">
                        <img
                            alt="Wayne State University"
                            src="https://jordyaraujo.github.io/static/media/wsu.jpg"
                            className="image"
                            style={{ width: "100%" }}
                        />
                        <PhotoButton id="btnWSU" text="Wayne State University" />
                    </div>

                    <div className="container">
                        <img
                            alt="Baja 2016"
                            src="https://jordyaraujo.github.io/static/media/baja.2016.jpg"
                            className="image"
                            style={{ width: "100%" }}
                        />
                        <PhotoButton id="btn2016" text="XXII Competição Baja SAE Brasil" />
                    </div>
                </div>

                <div className="w3-half">
                    <div className="container">
                        <img
                            alt="Baja 2014"
                            src="https://jordyaraujo.github.io/static/media/baja.2014.jpg"
                            className="image"
                            style={{ width: "100%" }}
                        />
                        <PhotoButton id="btn2014" text="XX Competição Baja SAE Brasil" />
                    </div>

                    <div className="container">
                        <img
                            alt="Massachusetts Institute Of Technology"
                            src="https://jordyaraujo.github.io/static/media/mit.jpg"
                            className="image"
                            style={{ width: "100%" }}
                        />
                        <PhotoButton id="btnMIT" text="Massachusetts Institute of Technology" />
                    </div>

                    <div className="container">
                        <img
                            alt="Aresta 3D"
                            src="https://jordyaraujo.github.io/static/media/aresta.jpg"
                            className="image imgpb"
                            style={{ width: "100%" }}
                        />
                        <PhotoButton id="btnAresta" text="Estágio na Aresta 3D" />
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoGrid;