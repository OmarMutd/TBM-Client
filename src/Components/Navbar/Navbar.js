
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import TokenService from "../../services/token-services";
import Navlinks from "./Navlinks";
import Lead from "./Lead";
import SignInOut from "./SignInOut";

import "./Navbar.css";

class Navbar extends Component {
  state = {
    menu_class: "",
  };

  setToggleNavbarClass = () => {
    if (this.state.menu_class === "") {
      this.setState({
        menu_class: "toggled",
      });
    } else {
      this.setState({
        menu_class: "",
      });
    }
  };

  render() {
    let nav_bar_class = `nav-bar ${this.state.menu_class}`;

    return (
      <div>
        <div className={nav_bar_class}>
          <Lead text="The Black Market" />
          <section className="left">
            <Link to="/Products">
              <Navlinks text="All" />
            </Link>
            <p onClick onClick={() => console.log("This is the image")}>
              Animals
            </p>
            <Link to={{ pathname: `/Category/animals` }}>
              <Navlinks text="Animals" />
            </Link>
            <Link to={{ pathname: `/Category/vehicles` }}>
              <Navlinks text="Vehicles" />
            </Link>
            <Link to={{ pathname: `/Category/furniture` }}>
              <Navlinks text="Furniture" />
            </Link>
            <Link to={{ pathname: `/Category/household` }}>
              <Navlinks text="Households" />
            </Link>
          </section>

          <section className="right">
            <form>
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">Submit</button>
            </form>
            <SignInOut />
            {/* <Link to='/OrderHistory'><Navlinks text='Order History' /></Link>

          </section>
          <FontAwesomeIcon
            icon={faBars}
            className="nav-bar-icon"
            onClick={this.setToggleNavbarClass}
          />
          <div className="clear-fix" />
        </div>
      </div>
    );
  }
}

export default Navbar;
