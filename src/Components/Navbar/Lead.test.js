import React from 'react';
import ReactDOM from 'react-dom';
import Lead from './Lead';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <Lead />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});