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

         <p>An e-commerce site where all the products are the color black.</p>
          <Buttons/>
          <br />
          

        </section>
      </div>
    );
  }
}
