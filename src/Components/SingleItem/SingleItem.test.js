import React from 'react';
import ReactDOM from 'react-dom';
import SingleItem from './SingleItem';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <SingleItem match={{ params: { id: 1 } }} />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});