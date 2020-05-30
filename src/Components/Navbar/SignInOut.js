import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-services";
import Navlinks from "./Navlinks";
import LoginContext from "../../LoginContext";

import "./Navbar.css";

export default class SignInOut extends Component {
  static contextType = LoginContext;

  state = {
    menu_class: "",
    loggedIn: this.context.loggedIn,
    quantity: this.context.quantity,
  };

  handleSignOutClick = () => {
    TokenService.clearAuthToken();
    this.context.updateLogIn();
    this.setState({});
    this.props.toggle();
  };

  renderSignOutLink() {
    return (
      <>
        <div>
          <Link
            className="nav-bar-item"
            to="/OrderHistory"
            onClick={this.props.toggle}
            aria-label="Order History"
          >
            Order History
          </Link>
        </div>
        <div>
          <Link
            className="nav-bar-item"
            onClick={this.handleSignOutClick}
            to="/"
            aria-label="Sign Out"
          >
            Sign Out
          </Link>
        </div>
        <div>
          <Link
            className="nav-bar-item"
            to="/Cart"
            onClick={this.props.toggle}
            aria-label="Cart"
          >
            Cart ({this.context.quantity})
          </Link>
        </div>
      </>
    );
  }

  renderSignInLink() {
    return (
      <div>
        <Link to="/SignUp" onClick={this.props.toggle} aria-label="Sign Up">
          <Navlinks text="Sign Up" />
        </Link>
        <Link to="/SignIn" onClick={this.props.toggle} aria-label="Sign In">
          <Navlinks text="Sign In" />
        </Link>
      </div>
    );
  }

  render() {
    const loggedIn = this.context.loggedIn;

    if (loggedIn === true) {
      return this.renderSignOutLink();
    } else {
      return this.renderSignInLink();
    }
  }
}
