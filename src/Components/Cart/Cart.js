import React, { Component } from "react";
import "./Cart.css";
import CartItems from "../CartItem/CartItem";
import config from "../../config";
import EmptyCart from "./EmptyCart";
import TokenService from "../../services/token-services";
import LoginContext from "../../LoginContext";

export default class Cart extends Component {
  static contextType = LoginContext;

  state = {
    cart: {},
    total: 0,
  };

  getCart() {
    fetch(`${config.API_ENDPOINT}/cart/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((response) => response.json())
      .then((items) =>
        items.reduce((cart, item) => {
          if (!cart[item.id]) {
            cart[item.id] = item;
            return cart;
          }
          cart[item.id].quantity += 1;
          return cart;
        }, {})
      )
      .then(this.setCart.bind(this));
  }

  componentDidMount() {
    const cart = this.state.cart;
    this.getCart(cart);
    this.updateTotal();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const itemsInCart = this.state.cart;
  //   if (itemsInCart.length !== prevState.cart.length) {
  //     this.getCart(itemsInCart);
  //   }
  // }

  setCart(cart) {
    if (Object.keys(this.state.cart) !== 0) {
      this.setState({ cart: cart });
    }
    this.updateTotal();
  }

  clearCart = () => {
    const user_id = "1";
    fetch(`${config.API_ENDPOINT}/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({ user_id }),
    })
      .then((res) => res.text())
      .then((text) => (text.length ? JSON.parse(text) : {}))
      .then(() => window.location.reload());
  };

  parseNumber(strg) {
    var strg = strg || "";
    var decimal = ".";
    strg = strg.replace(/[^0-9$.,]/g, "");
    if (strg.indexOf(",") > strg.indexOf(".")) decimal = ",";
    if ((strg.match(new RegExp("\\" + decimal, "g")) || []).length > 1)
      decimal = "";
    if (
      decimal != "" &&
      strg.length - strg.indexOf(decimal) - 1 == 3 &&
      strg.indexOf("0" + decimal) !== 0
    )
      decimal = "";
    strg = strg.replace(new RegExp("[^0-9$" + decimal + "]", "g"), "");
    strg = strg.replace(",", ".");
    return parseFloat(strg);
  }

  updateTotal() {
    this.setState({
      total: Object.entries(this.state.cart).reduce(
        (sum, [id, item]) =>
          sum + this.parseNumber(item.price.slice(1)) * item.quantity,
        0
      ),
    });
  }

  incrementItem(id) {
    const item = { ...this.state.cart[id] };
    item.quantity += 1;
    const cart = { ...this.state.cart };
    cart[id] = item;
    this.setCart(cart);
  }

  decrementItem(id) {
    const item = { ...this.state.cart[id] };
    item.quantity -= 1;
    const cart = { ...this.state.cart };
    cart[id] = item;
    this.setCart(cart);
  }

  checkoutCart = () => {
    fetch(`${config.API_ENDPOINT}/cart/checkout/12345`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
      })
      .then(() => this.context.fetchCartQuantity())
      .then(() => {
        this.props.history.push("/OrderHistory");
      });
  };

  render() {
    const cartItems = Object.values(this.state.cart);
    if (cartItems.length > 0) {
      return (
        <div className=".1cart">
          <h2>Shopping Cart</h2>
          <CartItems
            setCart={this.setCart.bind(this)}
            cart={cartItems}
            incrementItem={this.incrementItem.bind(this)}
            decrementItem={this.decrementItem.bind(this)}
          />
          <button
            className="clear-cart"
            aria-label="clear cart"
            onClick={() => this.clearCart()}
          >
            Clear cart
          </button>
          <p className="cart-total-title">
            Cart Total: $
            {this.state.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            .00
          </p>
          <button
            className="cart-checkout"
            aria-label="cart checkout"
            onClick={() => this.checkoutCart()}
          >
            Checkout
          </button>
          <div></div>
        </div>
      );
    } else {
      return (
        <div>
          <EmptyCart />
        </div>
      );
    }
  }
}
