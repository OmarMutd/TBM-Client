import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./SignUpPage.css";
import AuthApiService from "../../services/auth-api-services";
import LoginContext from "../../LoginContext";
import TokenService from "../../services/token-services";
import CartLogo from '../../favicon.ico'


class SignUpPage extends Component {
  static contextType = LoginContext;

  state = {
    error: null,
    fromSignIn: false,
  };

  handleSignInSuccess = () => {
    this.context.updateLogIn();
    this.setState({});
    if (this.state.fromSignIn === true) {
      this.props.history.go(-2);
    } else {
      this.props.history.goBack();
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;

    this.setState({ error: null });

    AuthApiService.postUser({
      username: username,
      password: password,
    })
      .then(() => {
        AuthApiService.postLogin({
          username: username,
          password: password,
        }).then((res) => {
          TokenService.saveAuthToken(res.authToken);

          this.handleSignInSuccess();
        });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    if (this.props.location.state) {
      this.setState({
        fromSignIn: this.props.location.state.fromSignIn,
      });
    }
  }

  render() {
    const { error } = this.state;
    return (
      <div>
        <div role="alert">{error && <p className="sign-error">{error}</p>}</div>
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h2 className="signup-header">Create An Account</h2>
          <img className='cart-logo' alt="favicon" src={CartLogo}></img>

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
              type="text"
              required
            />
          </div>
          <p className="no-account">
            Already Have an Account?
            <Link to="/SignIn" className="sign-up">
              {" "}
              Sign In
            </Link>
          </p>

          <div className="useful-buttons">
            <button className="sign-up-button" type="submit">
              Sign Up
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

export default withRouter(SignUpPage);
