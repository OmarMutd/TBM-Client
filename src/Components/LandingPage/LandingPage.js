import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <header role="banner">
          <h1>The Black Market</h1>
        </header>
        <section>
          <p>An e-commerce site where all the products are the color black.</p>
          <p>Click Sign In for further instructions.</p>
          <br />
          <Link to="/SignIn">
            <button type="button">Sign In</button>
          </Link>
          <Link to={{ pathname: "/SignUp", state: { fromLanding: true } }}>
            <button type="button">Sign Up</button>
          </Link>
        </section>
      </div>
    );
  }
}
