import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <Item />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});