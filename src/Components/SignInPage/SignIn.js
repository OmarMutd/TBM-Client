import React, { Component } from "react";
import SignInPage from "./SignInPage";

export default class SignIn extends Component {
  render() {
    return (
      <section>
        <SignInPage />
        <p className="sign-in-dummy">
          The Black Market is a secure shopping app that only requires a unique
          username of your choice to get started. Use the below mock credentials
          to check out the marketplace for yourself!
        </p>
        <ul>
          <li className="sign-in-dummy">username: TBMuser</li>

          <li className="sign-in-dummy">password: Password1!</li>
        </ul>
      </section>
    );
  }
}
