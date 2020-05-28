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
    message: "",
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
      })
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
      .then((singleitem) => this.context.fetchCartQuantity()
      )
      .then(
        this.setState({ message: "Added to Cart!" }),
        setTimeout(() => this.setState({ message: "" }), 1500)
      );
  };

  render() {
    const { id, title, description, category, price, url } = this.state.data;
    return (
      <div>
        <div className="item-card">
          <div className="item-column">
            <div className="item-image">
              <Link to={`/SingleItem/${id}`}>
                <img src={url} alt={description} />
              </Link>
            </div>
          </div>
          <div className="item-column">
            <div className="product-information"></div>
            <p>{title}</p>
            <p>{price}</p>
            <p>Category: {category}</p>
            <div className="product-desc">{description}</div>
            <div className="added-to-cart-message-single-item">{this.state.message}</div>
            <button onClick={() => this.addToCart(`${id}`)}>Add to Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
