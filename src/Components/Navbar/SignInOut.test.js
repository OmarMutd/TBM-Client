import React from 'react';
import ReactDOM from 'react-dom';
import SignInOut from './SignInOut';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <SignInOut />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});