import React, { Component } from "react";
import "./OrderHistory.css";
import Order from "../Order/Order";
import config from "../../config";

export default class OrderHistory extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/cart/history/1`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((orders) => {
        this.setState({ orders: orders });
      });
  }

  render() {
    if (!this.state.orders.length) {
      return (
        <div className=".1cart">
          <h1>You have not purchased anything yet from The Black Market.</h1>
          <p>
            Looking for inspiration? Browse our inventory and see all the
            amazing products available on the market!
          </p>
          <div></div>
        </div>
      );
    } else {
      return (
        <div className=".1cart">
          <h1>Order History</h1>
          <Order orders={this.state.orders} />
        </div>
      );
    }
  }
}
