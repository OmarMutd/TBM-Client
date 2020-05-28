import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TokenService from "../../services/token-services";
import AuthApiService from "../../services/auth-api-services";
import { Link } from "react-router-dom";
import LoginContext from "../../LoginContext";
import "./SignInPage.css";
import CartLogo from "../../favicon.ico";

class SignInPage extends Component {
  static contextType = LoginContext;

  state = {
    error: null,
  };

  handleSignInSuccess = () => {
    this.context.updateLogIn();
    this.setState({});

    this.props.history.goBack();
  };

  handleSubmitJwtAuth = (e) => {
    e.preventDefault();
    this.setState({ error: null });

    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    AuthApiService.postLogin({
      username: username,
      password: password,
    })
      .then((res) => {
        TokenService.saveAuthToken(res.authToken);

        this.handleSignInSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <div role="alert">{error && <p className="sign-error">{error}</p>}</div>
        <form className="signup-form" onSubmit={this.handleSubmitJwtAuth}>
          <h2 className="signup-header">Sign In</h2>
          <img className="cart-logo" alt="favicon" src={CartLogo}></img>

          <div className="username-signup">
            <label htmlFor="username-input"></label>
            <input
              id="username-input"
              placeholder="Username"
              className="input-field"
              type="text"
              required
            />
          </div>
          <div className="password-signup">
            <label htmlFor="password-input"></label>
            <input
              id="password-input"
              placeholder="Password"
              className="input-field"
              type="password"
              required
            />
          </div>
          <p className="no-account">
            Don't have an account?
            <Link
              to={{
                pathname: "/SignUp",
                state: {
                  fromSignIn: true,
                },
              }}
              className="signup-button"
            >
              {" "}
              Sign Up
            </Link>
          </p>

          <div className="useful-buttons">
            <button typer="submit" className="sign" aria-label="">
              Sign In
            </button>

            <Link to="/">
              <button className="go-back-button">Go back</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignInPage);
