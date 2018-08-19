import React, { Component } from "react";
import "./SideBar.css";

class SideBar extends Component {
  render() {
    return (
      <nav
        className="w3-sidebar w3-hide-medium w3-hide-small"
        style={{ width: "40%" }}
      >
        <div className="bgimg" />
      </nav>
    );
  }
}

export default SideBar;
