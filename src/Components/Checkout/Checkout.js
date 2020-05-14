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
                        <ul className="items">
                            <li><img src="" alt="thumbnail-black-socks"></img></li>
                            <li><p>Black Socks</p></li>
                            <li><p>Quantity: 4</p></li>
                            <li><p>Price: $12.99</p></li>
                            <br/>
                            <br/>
                            <li><img src="" alt="thumbnail-black-pens"></img></li>
                            <li><p>Black Pens</p></li>
                            <li><p>Quantity: 2</p></li>
                            <li><p>Price: $2.99</p>

                            </li>
                        </ul>
                </section>
            </div>
        )
    }
}
