import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../config";
import "./SingleItem.css";
import LoginContext from "../../LoginContext";
import TokenService from "../../services/token-services";

export default class SingleItem extends Component {
  static contextType = LoginContext;

  state = {
    data: [],
  };

  componentDidMount() {
    this.getSingleItem();
  }

  getSingleItem = () => {
    const id = this.props.match.params.id;
    fetch(`${config.API_ENDPOINT}/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
      });
  };

  addToCart = (id) => {
    // const user_id = "1";
    const product_id = id;
    const quantity = "1";
    const added_item = {
      // user_id: user_id,
      product_id: product_id,
      quantity: quantity,
    };
    fetch(`${config.API_ENDPOINT}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(added_item),
    })
      .then((response) => response.json())
      .then((singleitem) => this.context.fetchCartQuantity());
  };

  render() {
    const { id, title, description, category, price, url } = this.state.data;
    return (
      <div>
        <div className="item-card">
          <div className="item-image">
            <Link to={`/SingleItem/${id}`}>
              <img src={url} alt={description} />
            </Link>
          </div>
          <button onClick={() => this.addToCart(`${id}`)}>Add to Cart</button>
          <div className="product-information"></div>
          <p>{title}</p>
          <p>{price}</p>
          <p>
            quantity:
            <select>
              <option> 1 </option>
              <option> 2 </option>
              <option> 3 </option>
              <option> 4 </option>
              <option> 5 </option>
              <option> 6 </option>
              <option> 7 </option>
              <option> 8 </option>
              <option> 9 </option>
              <option> 10 </option>
            </select>
          </p>

          <p>Category: {category}</p>
          <div className="product-desc">{description}</div>
          <button>
            <Link to="/Products">Go Back</Link>
          </button>
        </div>
      </div>
    );
  }
}
