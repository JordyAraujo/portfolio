import React, { Component } from 'react'

class OpenHiddenSideBar extends Component {
    render() {
        return (

            <span className="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black" style={{ width: "auto", right: 0 }} onClick={this.props.onClickOpenNav}>
                <i className="fa fa-bars"></i>
            </span>
        )
    }
}

export default OpenHiddenSideBar