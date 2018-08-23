import React, { Component } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import HiddenSideBar from './components/HiddenSideBar'
import PageContent from './components/content/PageContent'

class App extends Component {
  constructor() {
    super()
    this.state = {
      styleHiddenSideBar: {
        width: "60%",
        display: "none",
        paddingTop: "150px",
        right: 0,
        zIndex: 2,
      },
      imgColor: "imgpb"
    }
  }

  handleClickCloseNav() {
    const display = this.state.styleHiddenSideBar.display
    if (display === 'block') {
      this.setState({
        ...this.state,
        styleHiddenSideBar: {
          width: "60%",
          display: "none",
          paddingTop: "150px",
          right: 0,
          zIndex: 2
        }
      })
    }
  }

  handleClickOpenNav() {
    const display = this.state.styleHiddenSideBar.display
    if (display === 'none') {
      this.setState({
        ...this.state,
        styleHiddenSideBar: {
          width: "60%",
          display: "block",
          paddingTop: "150px",
          right: 0,
          zIndex: 2
        }
      })
    }
  }

  handleEnter() {
    this.setState({
      ...this.state,
      imgColor: "imgcolor"
    })
  }

  handleLeave() {
    this.setState({
      ...this.state,
      imgColor: "imgpb"
    })
  }

  render() {
    return (

      <React.Fragment>

        <SideBar
          onEnter={() => this.handleEnter()}
          onLeave={() => this.handleLeave()}
          imgColor={this.state.imgColor}
        />

        <HiddenSideBar
          styleHiddenSideBar={this.state.styleHiddenSideBar}
          onClickCloseNav={() => this.handleClickCloseNav()}
        />

        <PageContent
          onClickOpenNav={() => this.handleClickOpenNav()}
        />

      </React.Fragment>

    )
  }
}

export default App
