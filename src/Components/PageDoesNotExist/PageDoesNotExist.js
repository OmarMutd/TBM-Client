import React, { Component } from 'react';
import './PageDoesNotExist.css';

export class PageDoesNotExist extends Component {
    render() {
        return (
            <div className='wrapper'>
                <h1>UH-OH!</h1>
                <h2>This page doesn't exist.</h2>
            </div>
        )
    }
}

export default PageDoesNotExist;
