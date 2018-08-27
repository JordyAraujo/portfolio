import React, { Component } from "react";

class PhotoButton extends Component {
    render() {
        return (
            <div className="overlay"
                onMouseEnter={this.props.onEnter}
                onMouseLeave={this.props.onLeave}>
                <button id={this.props.id} className="overlay text"></button>
            </div>
        );
    }
}

export default PhotoButton;