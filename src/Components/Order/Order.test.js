import React from 'react';
import ReactDOM from 'react-dom';
import Order from './Order';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <Order />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});