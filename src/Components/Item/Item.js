import React, { Component } from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
import config from '../../config';

export default class Item extends Component {

    addToCart = (id) => {
        const user_id = "1"
        const product_id = id
        const quantity = "1"
        const added_item = { user_id: user_id, product_id: product_id, quantity: quantity }
        fetch(`${config.API_ENDPOINT}/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(added_item)
        })
            .then(response => response.json())
            .then(data => { this.setState({ data: data }) });
    };

    render() {
        const { id, title, description, price, url } = this.props.product;
        return (
            <div className="card">
                <div className='item-card'>
                    <div className='item-image'>
                        <Link to={{ pathname: `/SingleItem/${id}` }}><img src={url} alt={description} /></Link>
                    </div>
                    <button onClick={() => this.addToCart(`${id}`)}>Add to Cart</button>
                    <div className='product-information'></div>
                    <p>{title}</p>
                    <p>{price}</p>
                </div>
            </div>
        )
    }
}
