import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/fontawesome-free-solid";
import Navlinks from "./Navlinks";
import Lead from "./Lead";
import "./Navbar.css";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu_class: "",
    };
  }
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
  render = () => {
    let nav_bar_class = `nav-bar ${this.state.menu_class}`;
    return (
      <div>
        <div className={nav_bar_class}>
          <Lead text="The Black Market" />
          <section className="search">
            <form className="search-bar">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit">
                <FontAwesomeIcon icon={faSearch} className="search-bar-icon" />
              </button>
            </form>
          </section>
          <div className="link-row">
            <section className="left">
              <Link to="/Products">
                <Navlinks text="All" />
              </Link>
              <Link to={{ pathname: `/Category/Animals` }}>
                <Navlinks text="Animals" />
              </Link>
              <Link to={{ pathname: `/Category/Vehicles` }}>
                <Navlinks text="Vehicles" />
              </Link>
              <Link to={{ pathname: `/Category/Furniture` }}>
                <Navlinks text="Furniture" />
              </Link>
              <Link to={{ pathname: `/Category/Households` }}>
                <Navlinks text="Households" />
              </Link>
            </section>
            <section className="right">
              <Link to="/OrderHistory">
                <Navlinks text="Order History" />
              </Link>
              <Link to="/">
                <Navlinks text="Sign Out" />
              </Link>
              <Link to="/Cart">
                <Navlinks text="Cart" />
              </Link>
            </section>
          </div>
          <FontAwesomeIcon
            icon={faBars}
            className="nav-bar-icon"
            onClick={this.setToggleNavbarClass}
          />
          <div className="clear-fix" />
        </div>
      </div>
    );
  };
}
export default Navbar;
