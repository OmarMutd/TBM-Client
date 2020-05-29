import React from 'react';
import ReactDOM from 'react-dom';
import NoOrder from './NoOrders'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <NoOrder />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});