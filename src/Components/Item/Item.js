import React, { Component } from 'react'
import './Item.css'
import { ProductConsumer } from '../../context'
import { allTheProducts } from '../../store'

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: allTheProducts,
        }
    }
    render() {
        return (
            <div>
                    <div className='product-card'>
                        <div className='the-product'>
                            <ProductConsumer>
                            {(context) => (
                                context='this is an item'
                            )}
                            </ProductConsumer>
                        </div>

                    </div>
            
            </div>
        )
    }
}
