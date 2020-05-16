import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";


import LandingPage from "./Components/LandingPage/LandingPage";
import SignIn from "./Components/SignInPage/SignIn";
import SignUp from "./Components/SignUpPage/SignUp";
import Cart from "./Components/Cart/Cart";
import Checkout from "./Components/Checkout/Checkout";
import Item from "./Components/Item/Item";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import OrderView from "./Components/OrderView/OrderView";
import Products from "./Components/Products/Products";
import PageDoesNotExist from "./Components/PageDoesNotExist/PageDoesNotExist";
import Navbar from "./Components/Navbar/Navbar";
import SingleItem from "./Components/SingleItem/SingleItem";
import LoginContext from "./LoginContext";
import TokenService from "./services/token-services";
import Category from './Components/Category/Category';


class App extends Component {
  state = {
    loggedIn: TokenService.hasAuthToken(),
  };

  updateLogIn = () => {
    if (TokenService.hasAuthToken()) {
     
      this.setState({
        loggedIn: true,
      });
    } else {
      
      this.setState({
        loggedIn: false,
      });
    }
  };

  render() {
    const contextValue = {
      loggedIn: this.state.loggedIn,
      updateLogIn: this.updateLogIn,
    };


    return (
      <div className="App">
        <LoginContext.Provider value={contextValue}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Checkout" component={Checkout} />
            <Route path="/Item" component={Item} />
            <Route path="/OrderHistory" component={OrderHistory} />
            <Route path="/Products" component={Products} />
            <Route path='/Category/:category' component={Category} />
            <Route path="/SingleItem/:id" component={SingleItem} />
            <Route component={PageDoesNotExist} />
          </Switch>
        </LoginContext.Provider>
      </div>
    );
  }

}

export default App;
