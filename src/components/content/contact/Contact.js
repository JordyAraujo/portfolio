import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (

            <div className="w3-padding-32 w3-content w3-text-grey" id="contact" style={{ marginBottom: "64px" }}>
                <h2>Contato</h2>
                <hr className="w3-opacity" />

                <div className="w3-section">
                    <p>
                        <i className="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i> Natal/RN</p>
                    <p>
                        <i className="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> +55 84 99859-0725</p>
                    <p>
                        <i className="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i> jordyaraujo@outlook.com</p>
                </div>
            </div>
        )
    }
}

export default Contact