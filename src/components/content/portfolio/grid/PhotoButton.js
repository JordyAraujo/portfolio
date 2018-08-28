import React, { Component } from "react";

class PhotoButton extends Component {
  render() {
    return (
      <div className="overlay">
        <button
          onMouseLeave={this.props.onLeave}
          onMouseEnter={this.props.onEnter}
          id={this.props.id}
          className="overlay text"
        />
      </div>
    );
  }
}

export default PhotoButton;
