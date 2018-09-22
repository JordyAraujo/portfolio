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
      data: {
        hiddenSideBar: {
          content1: null,
          content2: null,
          content3: null,
          content4: null
        },
        resumeDownload: {
          title: null
        },
        portfolio: {
          title: null
        },
        header: {
          title: null,
          content: null
        },
        contact: {
          title: null,
          content1: null,
          content2: null,
          content3: null
        },
        skills: {
          title: null,
          content1: null,
          content2: null,
          content3: null,
          content4: null
        },
        about: {
          title: null,
          content: null
        },
        modals: {
          baja2013: {
            title: null,
            content: null
          },
          baja2014: {
            title: null,
            content: null
          },
          baja2016: {
            title: null,
            content: null
          },
          mit: {
            title: null,
            content: null
          },
          wsu: {
            title: null,
            content: null
          },
          aresta: {
            title: null,
            content: null
          },
          cpNatal: {
            title: null,
            content: null
          }
        }
      },
      lang: "pt",
      error: null
    };
  }

  async componentDidMount() {
    try {
      const result = await axios.get(langPT);
      console.log(result.data);

      this.setState({
        ...this.state,
        data: result.data
      });
      console.log(this.state.data);
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
          data={this.state.data}
          displayHiddenSideBar={this.state.displayHiddenSideBar}
          onClickCloseNav={() => this.handleClickCloseNav()}
        />

        <PageContent onClickOpenNav={() => this.handleClickOpenNav()} />
      </React.Fragment>
    );
  }
}

export default App;
