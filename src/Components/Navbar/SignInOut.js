import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import TokenService from "../../services/token-services";
import Navlinks from "./Navlinks";
import Lead from "./Lead";
import LoginContext from "../../LoginContext";

import "./Navbar.css";
import Cart from "../Cart/Cart";

export default class SignInOut extends Component {
  static contextType = LoginContext;

  state = {
    menu_class: "",
    loggedIn: this.context.loggedIn,
  };

  handleSignOutClick = () => {
    TokenService.clearAuthToken();
    this.context.updateLogIn();
    this.setState({});
  };

  renderSignOutLink() {
    return (
      <div>
        <div className="nav-bar-item">
          <Link className="nav-bar-item" to="/OrderHistory">
            Order History
          </Link>
        </div>
        <div className="nav-bar-item">
          <Link
            className="nav-bar-item"
            onClick={this.handleSignOutClick}
            to="/"
          >
            Sign Out
          </Link>
        </div>
        <div className="nav-bar-item">
          <Link className="nav-bar-item" to="/Cart">
            Cart
          </Link>
        </div>
      </div>
    );
  }

  renderSignInLink() {
    return (
      <div>
        <Link to="/SignUp">
          <Navlinks text="Sign Up" />
        </Link>
        <Link to="/SignIn">
          <Navlinks text="Sign In" />
        </Link>
      </div>
    );
  }

  render() {
    const loggedIn = this.context.loggedIn;

    if (loggedIn == true) {
      return this.renderSignOutLink();
    } else {
      return this.renderSignInLink();
    }
  }
}
