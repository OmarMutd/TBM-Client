import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router } from "react-router";
import history from "./history";
import { ProductProvider } from "./context";

ReactDOM.render(
  <Router history={history}>
    <ProductProvider>
      <App />
    </ProductProvider>
  </Router>,
  document.getElementById("root")
);
