import React, { Component } from 'react'
import './Checkout.css'

export default class Checkout extends Component {
    render() {
        return (
            <div>
                <section>
                    <h2>Thank you for your purchase!</h2>
                </section>
                <section>
                    <h3>Your Order was</h3>
                    <ul>
                        <li><p>Item thumbnail, name, Descr</p></li>
                        <li><p>Quantity</p></li>
                        <li><p>Price</p></li>
                        </ul>
      </section>
            </div>
        )
    }
}
