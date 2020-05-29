import React, { Component } from "react";
import "./OrderHistory.css";
import Order from "../Order/Order";
import config from "../../config";
import NoOrders from './NoOrders'

import TokenService from "../../services/token-services";

import ScrollToTop from "react-scroll-up";

export default class OrderHistory extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/cart/history/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
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
        <NoOrders />
      );
    } else {
      return (
        <div className=".1cart">
          <ScrollToTop showUnder={200}>
            <button className="scroll-button" aria-label="scroll button">
              UP
            </button>
          </ScrollToTop>
          <h1>Order History</h1>
          <Order orders={this.state.orders} />
        </div>
      );
    }
  }
}
