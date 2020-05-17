import React, { Component } from 'react';
import './OrderHistory.css';
import Order from '../Order/Order';
import config from '../../config';


export default class OrderHistory extends Component {
    states = {
        orders: [],
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/orders/cart/2`, {
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
            <div className='.orderhistory'>
                <section>
                    <h2>Your Order History</h2>
                </section>
                <Order />
                <section>
                    <ul className="items">
                        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtUQdOKmmgn-99UsXqWW9Y3Bq_3yQ0XIUG6Jy9VCT9VBh08LPgu-1MvsUbLx7l4kAhuxLVqdU&usqp=CAc" alt="black socks"></img></li>
                        <li><p>Black Socks</p></li>
                        <li><p>Quantity: 4</p></li>
                        <li><p>Price: $12.99</p></li>
                        <br />
                        <br />
                        <li><img src="https://i.imgur.com/OKSJ07y.jpg" alt="black pens"></img></li>
                        <li><p>Black Pens</p></li>
                        <li><p>Quantity: 2</p></li>
                        <li><p>Price: $2.99</p></li>
                    </ul>
                </section>
            </div>
        )
    }
}
