import React, { Component } from "react";
import config from "./config";
import TokenService from './services/token-services'

const ProductContext = React.createContext({
  changeCartCount: () => {},
});

export default ProductContext;

export class ProductProvider extends Component {
  state = {
    quantity: "",
  };

  changeCartCount = () => {
    this.setState({
      cartCount: this.state.cartCount + 2,
    });
  };

  fetchCartQuantity = () => {
    fetch(`${config.API_ENDPOINT}/cart/1`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${TokenService.getAuthToken()}`
      },
    })
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          quantity: data.length,
        })
      );
  };

  render() {
    const value = {
      quantity: this.state.quantity,
      cartCount: this.state.cartCount,
      changeCartCount: this.changeCartCount,
      fetchCartQuantity: this.fetchCartQuantity,
    };
    return (
      <div>
        <ProductContext.Provider value={value}>
          {this.props.children}
        </ProductContext.Provider>
      </div>
    );
  }
}
