import React, { Component } from 'react'
import OpenHiddenSideBar from './OpenHiddenSideBar'
import Header from './header/Header'
import About from './about/About'
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import Portfolio from './portfolio/Portfolio';

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