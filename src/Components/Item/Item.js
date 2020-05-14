import React, { Component } from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

export default class Item extends Component {

    addToCart = () => {
        console.log('item added to cart')
      }
   
    render() {
        const {id, title, description, category, price, url} = this.props.product;
        return (
            <div className="card">
             
            
                 <div className='item-card'>
                     <div className='item-image' onClick={() => console.log('This is the image')}>
                         <Link to={{pathname:`/SingleItem/${id}`}}><img src={url} alt={description}/></Link>
                     </div>
                     <button onClick={this.addToCart}>Add to Cart</button>
                     <div className='product-information'></div>
                      <p>{title}</p>
                      <p>{price}</p>
                 </div>
            
            </div>
        )
    }
}
