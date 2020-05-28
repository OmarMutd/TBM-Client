import React, { Component } from "react";

import "./LandingPage.css";
import Buttons from './Buttons'

export default class LandingPage extends Component {

  

  render() {
    return (
      <div>
        <header role="banner">
          <h1>The Black Market</h1>
        </header>
        <section>
          <h2>Description of app</h2>
          <h3>Instructions for sign in</h3>
          <Buttons/>
          <br />
          
        </section>
      </div>
    );
  }
}
