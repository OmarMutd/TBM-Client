import React from 'react';
import ReactDOM from 'react-dom';
import Products from './Products';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <Products />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});