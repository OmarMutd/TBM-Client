import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  config from '../../config';
import './SingleItem.css';



export default class SingleItem extends Component {
    state = {
        data: [],
    };
    componentDidMount() {
    this.getSingleItem()
    }

    getSingleItem = () => {
        const id = this.props.match.params.id;
        fetch(`${config.API_ENDPOINT}/products/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {this.setState({data: data})});
    };

    addProductToCart = () => {
        console.log('Item has been added to cart')
     };

    render() {
        const {id, title, description, category, price, url} = this.state.data;
        return (
            <div>
                 <div className='item-card'>
                     <div className='item-image' onClick={() => console.log('This is the image')}>
                         <Link to={`/SingleItem/${id}`}><img src={url} alt={description} /></Link>
                     </div>
                     <button onClick={this.addProductToCart}>Add to Cart</button>
                     <div className='product-information'></div>
                      <p>{title}</p>
                      <p>{price}</p>
                      <p>Category: {category}</p>
                      <div className='product-desc'>{description}</div>
                      <button><Link to='/Products'>Go Back</Link></button>
                 </div>
            
            </div>
        );
    }
}


