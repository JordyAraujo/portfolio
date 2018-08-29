import React, { Component } from "react";
import "./PhotoGrid.css";

class PhotoGrid extends Component {
    render() {
        return (
            <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
                <div className="w3-half">
                    <div className="container">
                        <img
                            src="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2013.jpg"
                            alt="Baja 2013"
                            onClick={this.props.onClickBaja2013}
                        />
                    </div>

                    <div className="container">
                        <img
                            src="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/wsu.jpg"
                            alt="Wayne State University"
                            onClick={this.props.onClickWSU}
                        />
                    </div>

                    <div className="container">
                        <img
                            src="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2016.jpg"
                            alt="Baja 2016"
                            onClick={this.props.onClickBaja2016}
                        />
                    </div>
                </div>

                <div className="w3-half">
                    <div className="container">
                        <img
                            src="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/baja2014.jpg"
                            alt="Baja 2014"
                            onClick={this.props.onClickBaja2014}
                        />
                    </div>

                    <div className="container">
                        <img
                            src="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/mit.jpg"
                            alt="Massachusetts Institute Of Technology"
                            onClick={this.props.onClickMIT}
                        />
                    </div>

                    <div className="container">
                        <img
                            src="https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/img/aresta.jpg"
                            alt="Aresta 3D"
                            onClick={this.props.onClickAresta}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoGrid;
