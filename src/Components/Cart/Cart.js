import React, { Component } from 'react';
import './Cart.css';
import CartItems from '../CartItem/CartItem';
import config from '../../config';
import EmptyCart from './EmptyCart';

export default class Cart extends Component {
  state = {
    cart: [],
    total: 0,

  };

  getCart() {
    fetch(`${config.API_ENDPOINT}/cart/1`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(this.setCart.bind(this));
  };


  componentDidMount() {
    const cart = this.state.cart;
    this.getCart(cart);
    this.updateTotal();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState.cart)
    const itemsInCart = this.state.cart;
    if (itemsInCart.length !== prevState.cart.length) {
      this.getCart(itemsInCart);
    }
  }

  setCart(cart) {
    console.log(cart)
    this.setState({ cart: cart })
    this.updateTotal();
  }

  clearCart = () => {
    const user_id = "1"
    fetch(`${config.API_ENDPOINT}/cart`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id })
    })
      .then((res) => res.text())
      .then((text) => text.length ? JSON.parse(text) : {})
      .then(() => window.location.reload())
  };


  updateTotal() {
    // * item.quantity
    this.setState({ total: this.state.cart.reduce((sum, item) => sum + (+item.price.slice(1)), 0) })
  }


  render() {
    if (this.state.cart.length > 0) {
      return (
        <div className='.1cart'>
          <h2>Shopping Cart</h2>
          <CartItems setCart={this.setCart.bind(this)} cart={this.state.cart} />
          <button className='clear-cart' onClick={() => this.clearCart()}>Clear cart</button>
          <p className='cart-total-title'>Cart Total: ${this.state.total}</p>
          <button className='cart-checkout'>Checkout</button>
          <div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
          <EmptyCart />
        </div>
      )
    }
  }
}