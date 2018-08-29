import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import HiddenSideBar from "./components/HiddenSideBar";
import PageContent from "./components/content/PageContent";
import './components/content/portfolio/grid/Modal.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayHiddenSideBar: 'none'
    };
  }

  handleClickCloseNav() {
    const display = this.state.displayHiddenSideBar;
    if (display === "block") {
      this.setState({
        ...this.state,
        displayHiddenSideBar: 'none'
      });
    }
  }

  handleClickOpenNav() {
    const display = this.state.displayHiddenSideBar;
    if (display === "none") {
      this.setState({
        ...this.state,
        displayHiddenSideBar: 'block'
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        
        <SideBar imgColor={this.state.imgColor} />
        
        <HiddenSideBar
          displayHiddenSideBar={this.state.displayHiddenSideBar}
          onClickCloseNav={() => this.handleClickCloseNav()}
        />      

        <PageContent onClickOpenNav={() => this.handleClickOpenNav()} />
        
      </React.Fragment>
    );
  }
}

export default App;
