import React, { Component } from 'react'
import './Cart.css'

export default class Cart extends Component {
    render() {
        return (
            <div className='.cart'>
              <h2>Shopping Cart</h2>
              <div>
              
              <div className='item-card'>
                     <div className='item-image' onClick={() => console.log('This is the image')}>
                       <li><img src='img/black-zebra.jpg' alt="thumbnail-black-socks"></img></li>
                     </div>
                     <button onClick={() => console.log('Item has been added to cart!')}>Add to Cart</button>
                     <div className='product-information'></div>
                      <p>Zebra</p>
                      <p>price: $1,000</p>
                 </div>
              </div>
              </div>
        )
    }
}


       
   
