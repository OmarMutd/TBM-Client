import React, { Component } from 'react';
import './EmptyCart.css'

export class EmptyCart extends Component {
    render() {
        return (
            <div>
                <h1 className='empty-text'>Your cart is Empty!</h1>
            </div>
        )
    }
}

export default EmptyCart;
