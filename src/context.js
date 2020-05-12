import React, { Component } from 'react';
import { allTheProducts } from './store'
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        cartTotal: 0,
        cart: [],
        products: allTheProducts,
        productDetails: '',
        name: 'bob',
        age: '7'

    }

    addProductToCart = () => {
       console.log('Item has been added to cart')
    }

    itemDetails = () => {
        console.log('Details of the item')
    }

    render() {
        return (
            <div>
                <ProductContext.Provider value={{
                ...this.state,
                addProductToCart: this.addProductToCart,
                itemDetails: this.itemDetails
                }}>
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };