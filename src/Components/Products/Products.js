import React, { Component } from 'react'
import './Products.css';
import Item from '../Item/Item';
import  config from '../../config';

export class Products extends Component {
    state = {
        data: [],
    };
    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {this.setState({ data: data })});
    };

    render() {
        const value = this.state.data;
        console.log(value);
        return (
            <div>
                <section>
                    <h2>Featured Category</h2>
                </section>
                <section>
                    <h2>Grid of products</h2>
                    <div className='all-products'>
                        <div className='products'>
                             {value.map(item => {
                              return <Item product={item} key={item.id} />;
                            })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Products
