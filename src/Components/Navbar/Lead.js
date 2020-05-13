import React, { Component } from 'react';

import './Navbar.css'

class Lead extends Component {

    constructor(props) {
        super(props)
        this.text = props.text
    }

    render() {
        return (
            <div className='nav-bar-lead'>
                {this.text}
            </div>
        )
    }
}

export default Lead;