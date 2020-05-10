import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class PageDoesNotExist extends Component {
    render() {
        return (
            <div>
                <h1>UH-OH!</h1>
                <h2>This page doesn't exist.</h2>
            </div>
        )
    }
}

export default PageDoesNotExist
