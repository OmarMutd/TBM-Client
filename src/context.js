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
    render() {
        return (
            <div>
                <ProductContext.Provider value={{
                ...this.state
                }}>
                    {this.props.children}
                </ProductContext.Provider>
            </div>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };