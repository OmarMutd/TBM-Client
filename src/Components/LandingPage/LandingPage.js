import React, { Component } from 'react'
import './LandingPage.css'

export default class LandingPage extends Component {
    render() {
        return (
            <div>
                    <header role="banner">
                        <h1>The Black Market</h1>
                    </header>
                    <section>
                        <h2>Description of app</h2>
                        <h3>Instructions for sign in</h3><br/>
                            <button type="button">Sign In</button>
      </section>
            </div>
        )
    }
}
