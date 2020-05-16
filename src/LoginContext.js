import React from "react";

const LoginContext = React.createContext({
  loggedIn: false,
  updateLogIn: () => {},
});

export default LoginContext;
