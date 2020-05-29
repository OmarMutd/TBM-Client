import React, { Component } from "react";
import "./Products.css";
import Item from "../Item/Item";
import config from "../../config";
import ScrollToTop from "react-scroll-up";

export class Products extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
      });
  }

  render() {
    const value = this.state.data;
    return (
      <div>
        <ScrollToTop showUnder={160}>
          <button className="scroll-button" aria-label="scroll button">
            UP
          </button>
        </ScrollToTop>
        <section>
          <h2>All Products</h2>
        </section>
        <section>
          <div className="products">
            {value.map((item) => {
              return (
                <Item product={item} key={item.id} onClick={this.addToCart} />
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default Products;
