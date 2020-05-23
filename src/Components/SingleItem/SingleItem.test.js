import React from 'react';
import ReactDOM from 'react-dom';
import SingleItem from './SingleItem';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <SingleItem />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});