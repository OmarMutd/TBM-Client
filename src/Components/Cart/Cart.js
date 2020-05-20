import React, { Component } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import config from '../../config';

export default class Cart extends Component {
  state = {
    cart: [],
  };

  getCart() {
    fetch(`${config.API_ENDPOINT}/cart/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(cart => { this.setState({ cart: cart }) });
  };

  clearCart = (id) => {
    fetch(`${config.API_ENDPOINT}/cart`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(removeditem => console.log(removeditem));
  };

  componentDidMount() {
    const cart = this.state.cart;
    this.getCart(cart);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState.cart)
    const itemsInCart = this.state.cart;
    if (itemsInCart.length !== prevState.cart.length) {
      this.getCart(itemsInCart);
      // this.setState({ cart: itemsInCart });
    }
  }

  setCart(cart) {
    this.setState({ cart: cart })
  }





  render() {
    return (
      <div className='.1cart'>
        <h2>Shopping Cart</h2>
        <CartItem setCart={this.setCart.bind(this)} cart={this.state.cart} />
        <button onClick={() => this.clearCart}>Clear cart</button>
        <p>Cart Total(# items): $</p>
        <button>Checkout</button>
        <div>
        </div>
      </div>
    )
  }
}




