import React, { Component } from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
import config from '../../config';

export default class Item extends Component {

    addToCart = (id) => {

        fetch(`${config.API_ENDPOINT}/cart`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
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
