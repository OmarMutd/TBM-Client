import React, { Component } from 'react';
import './EmptyCart.css'

export class EmptyCart extends Component {

    state = {
        text: ''
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ text: "Your cart is Empty!"})
        }, 200)
    }

    
    render() {
        return (
            
                <h1 className='empty-text'>{this.state.text}</h1>
            
        )
    }
}

export default EmptyCart;
