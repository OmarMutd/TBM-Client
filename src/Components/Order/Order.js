import React, { Component } from 'react';
import './Order.css';
import { Link } from 'react-router-dom';


export class Order extends Component {
    state = {
        order: [],
    }

    // componentDidMount() {
    //     fetch(`${config.API_ENDPOINT}/orders/cart/2`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //     .then(response => response.json())
    //     .then(cart => {this.setState({ cart: cart })});
    // };

    render() {
        return (
            <div>
                <h2>Your Order History</h2>
            </div>
        )
    }
}

export default Order;
