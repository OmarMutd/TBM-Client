import React, { Component } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import config from '../../config';

export default class Cart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/cart/2`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(cart => { this.setState({ cart: cart }) });
  };


  render() {
    return (
      <div className='.1cart'>
        <h2>Shopping Cart</h2>
        <CartItem cart={this.state.cart} />
        <button>Clear cart</button>
        <button>Checkout</button>
        <div>
        </div>
      </div>
    )
  }
}




