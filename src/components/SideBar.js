import React, { Component } from "react";
import classnames from 'classnames';
import "./SideBar.css";

class SideBar extends Component {
  render() {
    return (
      <nav
        onMouseEnter={this.props.onEnter}
        onMouseLeave={this.props.onLeave}
        className={classnames('w3-sidebar w3-hide-medium w3-hide-small bgimg', this.props.imgColor)}
        style={{ width: "40%" }}
      >

      </nav>
    );
  }
}

export default SideBar;
