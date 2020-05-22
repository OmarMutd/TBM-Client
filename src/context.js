import React, { Component } from "react";

const ProductContext = React.createContext({
  addProductToCart: () => {},
});

class ProductProvider extends Component {
  state = {
    cartTotal: 0,
    cart: [],
    productDetails: "",
  };

  addProductToCart = () => {
    console.log("Item has been added to cart");
  };

  itemDetails = () => {
    console.log("Details of the item");
  };

  render() {
    return (
      <div>
        <ProductContext.Provider
          value={{
            ...this.state,
            addProductToCart: this.addProductToCart,
            itemDetails: this.itemDetails,
          }}
        >
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
