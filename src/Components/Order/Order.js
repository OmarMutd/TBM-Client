import React, { Component } from "react";
import "./Order.css";
import _ from "lodash";

export class Order extends Component {
  state = {
    orders: [],
    total: 0,
  };

  componentDidMount() {}

  parseNumber(strg) {
    var strg = strg || "";
    var decimal = ".";
    strg = strg.replace(/[^0-9$.,]/g, "");
    if (strg.indexOf(",") > strg.indexOf(".")) decimal = ",";
    if ((strg.match(new RegExp("\\" + decimal, "g")) || []).length > 1)
      decimal = "";
    if (
      decimal != "" &&
      strg.length - strg.indexOf(decimal) - 1 == 3 &&
      strg.indexOf("0" + decimal) !== 0
    )
      decimal = "";
    strg = strg.replace(new RegExp("[^0-9$" + decimal + "]", "g"), "");
    strg = strg.replace(",", ".");
    return parseFloat(strg);
  }

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
        const totalOrder = products.reduce((acc, cartItem) => {
          let priceWithoutSym = cartItem.price.slice(1);
          let price = this.parseNumber(priceWithoutSym);
          let amount = price * cartItem.quantity;
          return acc + amount;
        }, 0);
        return (
          <div key={invoiceId} className="order-row">
            <div>
              <h2 className="order-num">Order #{invoiceId}</h2>
              <h3 className="order-total">
                Order Total = $
                {totalOrder.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00
              </h3>
            </div>
            {products.map(({ id, title, price, quantity, url }) => {
              let cost = this.parseNumber(price.slice(1));
              let total = cost * quantity;

              return (
                <div key={id} className="single-order">
                  {<img src={url} className="order-img" alt={title} />}
                  <h4 className="order-info">
                    {title}: {quantity} x {price} = $
                    {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00
                  </h4>
                </div>
              );
            })}
          </div>
        );
      });
    }
  }
}

export default Order;
