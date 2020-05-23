import React from 'react';
import ReactDOM from 'react-dom';
import OrderHistory from './OrderHistory';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <OrderHistory />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});