import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import HiddenSideBar from "./components/HiddenSideBar";
import PageContent from "./components/content/PageContent";
import "./components/content/portfolio/grid/Modal.css";
import dataPT from "./lang/pt-br.json";
import dataEN from "./lang/en-us.json";

class App extends Component {
  constructor() {
    super();
    const data = null;
    this.state = {
      displayHiddenSideBar: "none",
      data: dataPT,
      lang: "pt"
    };
  }

  componentDidMount() {
    if (this.state.lang == "pt") {
      this.setState({
        ...this.state,
        data: dataPT
      });
    } else {
      this.setState({
        ...this.state,
        data: dataEN
      });
    }
  }

  handleClickCloseNav() {
    const display = this.state.displayHiddenSideBar;
    if (display === "block") {
      this.setState({
        ...this.state,
        displayHiddenSideBar: "none"
      });
    }
  }

  handleClickOpenNav() {
    const display = this.state.displayHiddenSideBar;
    if (display === "none") {
      this.setState({
        ...this.state,
        displayHiddenSideBar: "block"
      });
    }
  }
  handleClickLang() {
    if (this.state.lang == "pt") {
      this.setState({
        ...this.state,
        lang: "en"
      });
    } else {
      this.setState({
        ...this.state,
        lang: "pt"
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <SideBar imgColor={this.state.imgColor} />
        <HiddenSideBar
          data={this.state.data}
          displayHiddenSideBar={this.state.displayHiddenSideBar}
          onClickCloseNav={() => this.handleClickCloseNav()}
        />

        <PageContent
          onClickOpenNav={() => this.handleClickOpenNav()}
          onClickLang={() => this.handleClickLang()}
        />
      </React.Fragment>
    );
  }
}

export default App;
