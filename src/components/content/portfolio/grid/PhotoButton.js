import React, { Component } from "react";

class PhotoButton extends Component {
    render() {
        return (
            <div className="overlay">
                <button id={this.props.id} className="overlay text"></button>
            </div>
        );
    }
}

export default PhotoButton;