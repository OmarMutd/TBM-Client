import React from "react";

const LoginContext = React.createContext({
  loggedIn: false,
  quantity: 0,
  fetchCartQuantity: () => {},
  updateLogIn: () => {},
});

export default LoginContext;
