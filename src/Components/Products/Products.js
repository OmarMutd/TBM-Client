import React, { Component } from 'react'
import './Products.css'
import { ProductConsumer } from '../../context'
// import { store } from '../../store'
// import Item from '../Item/Item.js' 

export class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
        }
    }
    render() {
        const {id, title, description, category, price, url } = this.props.product
        return (
            <div>
               
                <section>
                    <h2>Welcome to the products page!</h2>
                </section>
                <section>
                    <h2>Grid of products</h2>
                    <div className='product-card'>
                        <div className='the-product' onClick={console.log('item viewed!')}>


                        </div>

                    </div>
                </section>
            </div>
        )
    }
}

export default Products;
