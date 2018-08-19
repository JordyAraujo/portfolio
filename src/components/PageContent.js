import React, { Component } from 'react'
import OpenHiddenSideBar from './content/OpenHiddenSideBar'
import Header from './content/Header'
import About from './content/About'
import Contact from './content/Contact';
import Footer from './content/Footer';
import Portfolio from './content/Portfolio';

class PageContent extends Component {
    render() {
        return (

            <div className="w3-main w3-padding-large" style={{ marginLeft: "40%" }}>

                <OpenHiddenSideBar
                    onClickOpenNav={() => this.props.onClickOpenNav()}
                />

                <Header />
                <About />
                <Portfolio />
                <Contact />
                <Footer />

            </div>

        )
    }
}

export default PageContent