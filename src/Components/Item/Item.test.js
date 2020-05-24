import React from "react";
import ReactDOM from "react-dom";
import Item from "./Item";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Item
        product={{
          id: 1,
          title: "Black Bear",
          description:
            "Cuddly bear family abducted from the wild! Caution is advised for small children and anyone who wants to keep their limbs.",
          category: "animals",
          price: "$500.00",
          url: "https://i.imgur.com/n4jPBwO.png",
        }}
      />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
