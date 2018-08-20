import React, { Component } from "react";

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
                        <div className="overlay">
                            {/* The button */}
                            <button id="btn2013" className="overlay text">
                                XIX Competição Baja SAE Brasil
                </button>
                        </div>
                    </div>

                    <div className="container">
                        <img
                            alt="Wayne State University"
                            src="https://jordyaraujo.github.io/static/media/wsu.jpg"
                            className="image"
                            style={{ width: "100%" }}
                        />
                        <div className="overlay">
                            {/* The button */}
                            <button id="btnWSU" className="overlay text">
                                Wayne State University
                </button>
                        </div>
                    </div>

                    <div className="container">
                        <img
                            alt="Baja 2016"
                            src="https://jordyaraujo.github.io/static/media/baja.2016.jpg"
                            className="image"
                            style={{ width: "100%" }}
                        />
                        <div className="overlay">
                            {/* The button */}
                            <button id="btn2016" className="overlay text">
                                XXII Competição Baja SAE Brasil
                </button>
                        </div>
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
                        <div className="overlay">
                            {/* The button */}
                            <button id="btn2014" className="overlay text">
                                XX Competição Baja SAE Brasil
                </button>
                        </div>
                    </div>

                    <div className="container">
                        <img
                            alt="Massachusetts Institute Of Technology"
                            src="https://jordyaraujo.github.io/static/media/mit.jpg"
                            className="image"
                            style={{ width: "100%" }}
                        />
                        <div className="overlay">
                            {/* The button */}
                            <button id="btnMIT" className="overlay text">
                                Massachusetts Institute of Technology
                </button>
                        </div>
                    </div>

                    <div className="container">
                        <img
                            alt="Aresta 3D"
                            src="https://jordyaraujo.github.io/static/media/aresta.jpg"
                            className="image"
                            style={{ width: "100%" }}
                        />
                        <div className="overlay">
                            {/* The button */}
                            <button id="btnAresta" className="overlay text">
                                Estágio na Aresta 3D
                </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoGrid;