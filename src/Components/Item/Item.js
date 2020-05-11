import React, { Component } from 'react'
import './Item.css'
import { ProductConsumer } from '../../context'
import { Link } from 'react-router-dom';

export default class Item extends Component {
   
    render() {
        const {id, title, description, category, price, img} = this.props.product;
        return (
            <div>
                 <div className='item-card'>
                     <div className='item-image' onClick={() => console.log('This is the image')}>
                         <Link to='/SingleItem'>
                             <img className='product-picture' src={img} alt='something' />

                         </Link>
                     </div>

                 </div>
            
            </div>
        )
    }
}
