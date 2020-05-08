import React, { Component } from 'react'
import './Cart.css'

export default class Cart extends Component {
    render() {
        return (
            <div>

                <h2>Shopping Cart</h2>

                <h3>List of items</h3>

                <ul class="items">
                    <li><p>Item thumbnail, name, Descr</p></li>
                    <li><p>Quantity</p></li>
                    <li><p>Price</p>


                        <button>Update</button>
                        <button>Delete</button></li>
                </ul>
                <button type="button">Checkout</button>
            </div>
        )
    }
}
