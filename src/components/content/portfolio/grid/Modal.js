import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
    render() {
        return (
            <div id="modal" className="modal" style={{ display: this.props.display }}>
                    <div className="modal-content">
                        <span className="close" onClick={this.props.onClickClose}><i className="fa fa-remove" /></span>
                        <h2>{this.props.title}</h2>
                        <hr className="w3-opacity"/>
                        <p>
                            {this.props.content}
                        </p>
                    </div>
                </div>
        );
    }
}

export default Modal;