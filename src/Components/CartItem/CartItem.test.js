import React from "react";
import ReactDOM from "react-dom";
import CartItem from "./CartItem";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <CartItem
        cart={[
          {
            id: 15,
            user_id: 1,
            date: "2020-05-23T14:59:21.516Z",
            checked_out: false,
            invoice_id: 20,
            product_id: 15,
            quantity: 1,
            title: "Hair Dryer",
            description:
              "Just a regular hair dryer, for drying your hair and electrocuting people in bathtubs.",
            category: "household",
            price: "$20.00",
            url: "https://i.imgur.com/k25a9kR.jpg",
          },
        ]}
      />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
