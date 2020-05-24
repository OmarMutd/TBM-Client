import React from 'react';
import ReactDOM from 'react-dom';
import SignInPage from './SignInPage';
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render
        (<BrowserRouter>
            <SignInPage />
        </BrowserRouter>,
            div)
    ReactDOM.unmountComponentAtNode(div);
});