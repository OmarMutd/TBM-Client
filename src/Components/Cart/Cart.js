import React, { Component } from "react";
import "./Cart.css";
import CartItem from "../CartItem/CartItem";
import config from "../../config";
// import EmptyCart from './EmptyCart';

export default class Cart extends Component {
  state = {
    cart: [],
  };

  getCart() {
    fetch(`${config.API_ENDPOINT}/cart/1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((cart) => {
        this.setState({ cart: cart });
      });
  }

  componentDidMount() {
    const cart = this.state.cart;
    this.getCart(cart);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.cart)
    const itemsInCart = this.state.cart;
    if (itemsInCart.length !== prevState.cart.length) {
      this.getCart(itemsInCart);
    }
  }

  setCart(cart) {
    console.log(cart);
    this.setState({ cart: cart });
  }

  updateCartTotal = () => {};

  clearCart = () => {
    const user_id = "1";
    fetch(`${config.API_ENDPOINT}/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id }),
    })
      .then((res) => res.text())
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then(() => window.location.reload());
  };

  render() {
    return (
      <div className=".1cart">
        <h2>Shopping Cart</h2>
        <CartItem setCart={this.setCart.bind(this)} cart={this.state.cart} />
        <button className="clear-cart" onClick={() => this.clearCart()}>
          Clear cart
        </button>
        <p className="cart-total-title">Cart Total: $</p>
        <button className="cart-checkout">Checkout</button>
        {/* {this.state.cart.length} */}
        <div></div>
      </div>
    );
  }
}
