import React, { Component } from 'react';
import { store } from './store'
const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        cartTotal: 0,
        cart: [],
        products: store,
        productDetails: '',

    }

    addProductToCart = () => {

    }

    render() {
        return (
            <div>
                <ProductContext.Provider value={{
                ...this.state,
                addProductToCart: this.addProductToCart
                }}>
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };