import React, { Component } from 'react'
import './Products.css'
import { ProductConsumer } from '../../context'
import Item from '../Item/Item'

export class Products extends Component {s
    render() {
        // const { id, title, description, category, price, url } = this.props.products
        return (
            <div>
               
                <section>
                    <h2>Welcome to the products page!</h2>
                </section>
                <section>
                    <h2>Grid of products</h2>
                    <div className='all-products'>
                        <div className='products'>
                        <ProductConsumer>
                            {value => {
                                return value.products.map(product => {
                                    return <Item
                                        product={product}
                                        key={product.id}
                                    />
                                } )
                            }}
                        </ProductConsumer>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}

export default Products;
