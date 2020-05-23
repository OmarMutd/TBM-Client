import React from 'react';
import ReactDOM from 'react-dom';
import Category from './Category';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <Category />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});