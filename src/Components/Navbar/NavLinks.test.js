import React from 'react';
import ReactDOM from 'react-dom';
import NavLinks from './NavLinks';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <NavLinks />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});