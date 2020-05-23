import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <header role="banner">
                    <h1>The Black Market</h1>
                </header>
                <section>
                    <h2>Description of app</h2>
                    <h3>Instructions for sign in</h3><br />
                    <Link to='/SignIn'><button className="sign" type="button">Sign In</button></Link>
                    <Link to='/SignUp'><button className='signup1' type="button">Sign Up</button></Link>

                </section>
            </div>
        )
    }
}
