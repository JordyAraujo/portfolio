import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import HiddenSideBar from "./components/HiddenSideBar";
import PageContent from "./components/content/PageContent";
import "./components/content/portfolio/grid/Modal.css";
import axios from "axios";

const langPT =
  "https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/lang/pt-br.json";
const langEN =
  "https://raw.githubusercontent.com/JordyAraujo/portfolio/master/src/lang/en-us.json";

class App extends Component {
  /* loadData() {
    if (this.state.lang === "pt") {
      fetch(langPT)
        .then(response => response.json())
        .then(data => {
          this.setState({
            ...this.state,
            data: data
          });
        });
    } else {
      fetch(langEN)
        .then(response => response.json())
        .then(data => {
          this.setState({
            ...this.state,
            data: data
          });
        });
    }
  } */

  constructor() {
    super();
    this.state = {
      displayHiddenSideBar: "none",
      hits: {},
      lang: "pt",
      error: null
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const result = await axios.get(langPT);

      this.setState({
        ...this.state,
        hits: result.data.hits
      });
    } catch (error) {
      this.setState({
        ...this.state,
        error
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

  render() {
    return (
      <React.Fragment>
        <SideBar imgColor={this.state.imgColor} />

        <HiddenSideBar
          data={this.state.hits}
          displayHiddenSideBar={this.state.displayHiddenSideBar}
          onClickCloseNav={() => this.handleClickCloseNav()}
        />

        <PageContent onClickOpenNav={() => this.handleClickOpenNav()} />
      </React.Fragment>
    );
  }
}

export default App;
