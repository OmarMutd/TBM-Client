import React, { Component } from "react";
import "./Item.css";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

export default class Item extends Component {
  render() {
    const { id, title, description, category, price, url } = this.props.product;
    return (
      <div>
        <div className="item_item-card">
          <div
            className="item_item-image"
            onClick={() => console.log("This is the image")}
          >
            <Link to={{ pathname: `/SingleItem/${id}` }}>
              <img src={url} />
            </Link>
          </div>

          <div className="item_product-information"></div>
          <button onClick={() => console.log("Item has been added to cart!")}>
            Add to Cart
          </button>
          <p>{title}</p>
          <p>{price}</p>
          <p>Category: {category}</p>
        </div>
      </div>
    );
  }
}
