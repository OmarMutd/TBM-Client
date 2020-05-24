import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <CartItem cart={{}} />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});