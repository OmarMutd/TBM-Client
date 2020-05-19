import React, { Component } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import config from '../../config';

export default class Cart extends Component {
  state = {
    cart: [],
  };

  componentDidMount() {
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
    const user_id = "1"
    fetch(`${config.API_ENDPOINT}/cart`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user_id)
    })
      .then(response => response.json())
      .then(removeditem => console.log(removeditem));
  };


  render() {
    return (
      <div className='.1cart'>
        <h2>Shopping Cart</h2>
        <CartItem cart={this.state.cart} />
        <button onClick={() => this.clearCart}>Clear cart</button>
        <p>Cart Total(# items): $</p>
        <button>Checkout</button>
        <div>
        </div>
      </div>
    )
  }
}




