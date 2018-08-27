import React, { Component } from "react";
import classnames from 'classnames';
import "./PhotoGrid.css";

class ImgLoader extends Component {
    render() {
        return (
            <img
                alt={this.props.imgAlt}
                src={this.props.imgSrc}
                className={classnames('image', this.props.imgColor)}
                style={{ width: "100%" }}
            />
        );
    }
}

export default ImgLoader;