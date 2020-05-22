import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import './CartItem.css';
import ReactTooltip from 'react-tooltip';




export class CartItem extends Component {
  state = {
    quantity: 0,
  }

  incrementItem = () => {
    const quantity = this.state.quantity
    this.setState({
      quantity: quantity + 1
    });
  };


  decrementItem = () => {
    if (this.state.quantity === 0) {
      this.setState({
        quantity: 0
      });
    } else {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  }

  removeItem(id) {
    const user_id = "1"
    fetch(`${config.API_ENDPOINT}/cart/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id })
    })
      .then((res) => res.text())
      .then((text) => text.length ? JSON.parse(text) : {})
      .then(() => {
        this.props.setCart(this.props.cart.filter(v => v.id !== +id));
      })
      .catch((error) => {
        throw error;
      })


  };

  render() {
    const cart = this.props.cart
    return (
      <div>
        <div>
          <div>
            <div className='shop-items'>
              <div className='shop-item'>

                {
                  cart.map(cartItem => {
                    return <div className='cart-row' key={cartItem.id}><Link to={{ pathname: `/SingleItem/${cartItem.id}` }}><img className='cart-item-image' src={cartItem.url} alt={cartItem.description} /></Link>
                      <p data-tip={cartItem.title} className='cart-item-title'>{cartItem.title}</p>
                      <ReactTooltip />
                      <p data-tip={cartItem.price} className='cart-price'>{cartItem.price}</p>
                      <ReactTooltip />
                      <p className='item-count'>#</p>
                      <button className='inc-item' onClick={this.incrementItem}>+</button>
                      <button className='dec-item' onClick={this.decrementItem}>-</button>
                      <button data-tip='Remove item from cart' className='remove-btn' onClick={() => this.removeItem(`${cartItem.id}`)}><i className="fa fa-trash"></i></button>
                      <ReactTooltip />
                    </div>

                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CartItem;
