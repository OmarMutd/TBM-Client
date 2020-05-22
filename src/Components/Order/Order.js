import React, { Component } from "react";
import "./Order.css";
import { Link } from "react-router-dom";
import _ from "lodash";

export class Order extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {}

  render() {
    const orders = this.props.orders;

    const groupedOrders = _.groupBy(orders, function (order) {
      return order.invoice_id;
    });

    const orderEntries = Object.entries(groupedOrders);

    if (!orders.length || !Object.keys(groupedOrders).length) {
      return <div>Loading...</div>;
    } else if (orders.length && Object.keys(groupedOrders).length) {
      return orderEntries.map(([invoiceId, products]) => {
        return (
          <div key={invoiceId}>
            <div>
              <h2>Order Number #{invoiceId}</h2>
              <h3>Products Purchased:</h3>
            </div>

            {products.map(({ id, title, price, quantity, url }) => {
              let cost = { price };
              console.log(cost);
              return (
                <div key={id}>
                  {/* <img src={url} /> */}
                  <h4>
                    {title}: {quantity} x {price}
                  </h4>
                </div>
              );
            })}
            <h3>Order Total = </h3>
          </div>
        );
      });
    }
  }
}

export default Order;
