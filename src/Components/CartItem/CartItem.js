import React, { Component } from "react";
import { Link } from "react-router-dom";
import config from "../../config";
import "./CartItem.css";
import ReactTooltip from "react-tooltip";
import LoginContext from "../../LoginContext";
import TokenService from '../../services/token-services'

export class CartItem extends Component {
  static contextType = LoginContext;

  removeItem(id) {
    const user_id = "1";
    fetch(`${config.API_ENDPOINT}/cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({ user_id }),
    })
      .then((res) => res.text())
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then(() => this.context.fetchCartQuantity())
      .then(() => {
        this.props.setCart(this.props.cart.filter((v) => v.id !== +id));
      })
      .catch((error) => {
        throw error;
      });
  }

  render() {
    const cart = this.props.cart;
    return (
      <div>
        <div>
          <div>
            <div className="shop-items">
              <div className="shop-item">
                {cart.map((cartItem) => {
                  return (
                    <div className="cart-row" key={cartItem.id}>
                      <Link to={{ pathname: `/SingleItem/${cartItem.id}` }}>
                        <img
                          className="cart-item-image"
                          src={cartItem.url}
                          alt={cartItem.description}
                        />
                      </Link>
                      <p data-tip="Product" className="cart-item-title">
                        {cartItem.title}
                      </p>
                      <ReactTooltip />
                      <p data-tip="Price" className="cart-price">
                        {cartItem.price}
                      </p>
                      <ReactTooltip />
                      <p data-tip="Quantity" className="item-count">
                        {cartItem.quantity}
                      </p>
                      {/* <button className='inc-item' onClick={() => this.props.incrementItem(cartItem.id)}>+</button>
                      <button className='dec-item' onClick={() => this.props.decrementItem(cartItem.id)}>-</button> */}
                      <button
                        data-tip="Remove item from cart"
                        className="remove-btn"
                        onClick={() => this.removeItem(`${cartItem.id}`)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                      <ReactTooltip />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
