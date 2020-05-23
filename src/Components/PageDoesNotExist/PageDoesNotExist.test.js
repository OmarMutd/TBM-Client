import React from 'react';
import ReactDOM from 'react-dom';
import PageDoesNotExist from './PageDoesNotExist';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <PageDoesNotExist />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});