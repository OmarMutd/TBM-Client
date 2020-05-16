import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
        const cart = this.props.cart
        return (
            <div>
               <div>
              
              <div className='item-card'>
                     <div className='item-image'>
                       <li><img src='img/black-zebra.jpg' alt="thumbnail-black-socks"></img></li>
                     </div>
                     <div className='1product-information'></div>
                      <p>Zebra</p>
                      <p>{this.state.quantity}</p>
                      <p>price: $1,000</p>
                 </div>
                 <div>
                 <div className='item-card'>
                     <div className='item-image'>
                         
                         {
                             cart.map(cartItem =>{
                            return <div key={cartItem.id}><Link to={{pathname:`/SingleItem/${cartItem.id}`}}><img src={cartItem.url} alt={cartItem.description}/></Link>
                              <p>{cartItem.title}</p>
                             <p>{cartItem.price}</p>
                             </div>
                             })
                         }
                         
                     </div>
                     <button onClick={this.addToCart}>Add to Cart</button>
                     <div className='product-information'></div>
                      
                 </div>
                 </div>
                 <button className='inc-item' onClick={this.incrementItem}>+</button>
                 <button className='dec-item' onClick={this.decrementItem}>-</button>
                 <button className='remove-all' onClick={this.removeItem}>Remove</button>

              </div>
            </div>
        )
    }
}

export default CartItem;
