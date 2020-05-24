import React from 'react';
import ReactDOM from 'react-dom';
import SignUpPage from './SignUpPage';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <SignUpPage />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});