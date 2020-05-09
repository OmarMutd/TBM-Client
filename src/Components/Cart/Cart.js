import React, { Component } from 'react'
import './Cart.css'

export default class Cart extends Component {
    render() {
        return (
            <div className='.cart'>

<section>
        <h2>Shopping Cart</h2>
      </section>
      <section>
        <h3>List of items</h3>
        <ul className="items">
          <li><img src="" alt="thumbnail-black-socks"></img></li>
          <li><p>Black Socks</p></li>
          <li><p>Quantity: <select id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button>Remove</button></p></li>
          <li><p>Price: $12.99</p></li>
          <br/>
          <br/>
          <li><img src="" alt="thumbnail-black-pens"></img></li>
          <li><p>Black Pens</p></li>
          <li><p>Quantity: <select id="quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
            <button>Remove</button></p></li>
          <li><p>Price: $2.99</p>
          
          </li>
          </ul>
        <button type="button">Checkout</button>
        <button>Clear Cart</button>
      </section>

            </div>
        )
    }
}
