import React, { Component } from 'react'

class Skills extends Component {
    render() {
        return (
            
            <React.Fragment>
                <p className="w3-wide">{this.props.skillname}</p>
                <div className="w3-light-grey">
                    <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{ width: this.props.percent }}>{this.props.percent}</div>
                </div>
            </React.Fragment>
        )
    }
}

export default Skills