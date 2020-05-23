import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";
import Navlinks from "./Navlinks";
import Lead from "./Lead";
import SignInOut from "./SignInOut";
import config from "../../config";
import "./Navbar.css";
import LoginContext from "../../LoginContext";

class Navbar extends Component {
  static contextType = LoginContext;

  state = {
    menu_class: "",
    data: [],
    query: "",
    quantity: "",
    cartIncrement: "",
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

  fetchCategories = () => {
    fetch(`${config.API_ENDPOINT}/products/categories`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          data: data,
        })
      );
  };

  fetchCartQuantity = () => {
    fetch(`${config.API_ENDPOINT}/cart/1`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          quantity: data.length,
        })
      );
  };

  componentDidMount() {
    this.setState({
      quantity: this.context.quantity,
    });
    this.fetchCartQuantity();
    this.fetchCategories();
  }

  componentDidUpdate(prevProps, prevState) {
    const quantity = this.state.quantity;
    if (quantity !== prevState.quantity) {
      this.fetchCartQuantity();
    }
  }

  handleSearch = (e) => {
    e.preventDefault();
  };

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  render() {
    let nav_bar_class = `nav-bar ${this.state.menu_class}`;
    const categories_lower = this.state.data;
    const categories = categories_lower.map(function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1).replace(/ -/, ":");
    });

    return (
      <div>
        <div className={nav_bar_class}>
          <Lead text="The Black Market" />
          <form className="search-bar" onSubmit={this.handleSearch}>
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleChange}
              placeholder="Search.."
              name="search"
            />
            <Link
              to={{
                pathname: `/SearchResults`,
                state: { query: this.state.query },
              }}
            >
              <button type="submit">Submit</button>
            </Link>
          </form>
          <div className="link-row">
            <section className="left">
              <Link to="/Products">
                <Navlinks text="All" />
              </Link>
              {categories.map((category) => {
                return (
                  <Link
                    key={category}
                    to={{ pathname: `/Category/${category.toLowerCase()}` }}
                  >
                    <div className="nav-bar-item">{category}</div>
                  </Link>
                );
              })}
            </section>

            <section className="right">
              <SignInOut quantity={this.state.quantity} />
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
  }
}

export default Navbar;
