import React, { Component } from 'react'
import './Cart.css'
import { ProductConsumer } from '../../context'


export default class Cart extends Component {
 constructor(props){
   super(props);
   this.state = {
     quantity: 0, 
   }
 }

   incrementItem = () => {
    const quantity = this.state.quantity
     this.setState({
       quantity: quantity + 1
     });
   };


   decrementItem = () => {
    if(this.state.quantity === 0){
      this.setState({
          quantity: 0
      });
    }else {
      this.setState({
          quantity: this.state.quantity - 1
      });
    }
}

  removeItem = () => {
    this.setState({
      quantity: 0
    })
  }
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
          <li><p>Quantity: {this.state.quantity} <br />
          <button className='add-item' onClick={this.incrementItem}>+</button>
          <button className='minus-item' onClick={this.decrementItem}>-</button>
          <button className='remove-all' onClick={this.removeItem}>Remove</button>
          </p></li>
          <li><p>Price: $12.99</p></li>
          <br/>
          <br/>
          <li><img src="" alt="thumbnail-black-pens"></img></li>
          <li><p>Black Pens</p></li>
          <li><p>Quantity: {this.state.quantity}</p>
          <button className='add-item' onClick={this.incrementItem}>+</button>
          <button className='minus-item' onClick={this.decrementItem}>-</button>
          <button className='remove-all' onClick={this.removeItem}>Remove</button>
          </li>
          <li><p>Price: $2.99</p>
          
          </li>
          </ul>
          <ProductConsumer>
                            {(context) => (
                               <div>
                              <p> Cart Total: ${context.state.cartTotal}</p>
                                </div>
                            )}
                            </ProductConsumer>
        <button type="button">Checkout</button>
        <button>Clear Cart</button>
      </section>

            </div>
        )
    }
}
