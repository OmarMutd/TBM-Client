import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import SignIn from "./Components/SignInPage/SignIn";
import SignUp from "./Components/SignUpPage/SignUp";
import Cart from "./Components/Cart/Cart";
import OrderHistory from "./Components/OrderHistory/OrderHistory";
import Products from "./Components/Products/Products";
import Item from "./Components/Item/Item";
import PageDoesNotExist from "./Components/PageDoesNotExist/PageDoesNotExist";
import Navbar from "./Components/Navbar/Navbar";
import SingleItem from "./Components/SingleItem/SingleItem";
import LoginContext from "./LoginContext";
import TokenService from "./services/token-services";
import Category from "./Components/Category/Category";
import SearchResults from "./Components/SearchResults/SearchResults";
import PrivateRoute from './Utilities/PrivateRoute';
import PublicRoute from './Utilities/PublicRoute';

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
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <LoginContext.Provider value={contextValue}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <PublicRoute path="/SignIn" component={SignIn} />
            <PublicRoute path="/SignUp" component={SignUp} />
            <PrivateRoute path="/Cart" component={Cart} />
            <PrivateRoute path="/OrderHistory" component={OrderHistory} />
            <Route path='/Item' component={Item} />
            <Route path="/Products" component={Products} />
            <Route path="/SearchResults" component={SearchResults} />
            <Route path="/Category/:category" component={Category} />
            <Route path="/SingleItem/:id" component={SingleItem} />
            <Route component={PageDoesNotExist} />
          </Switch>
        </LoginContext.Provider>
      </div>
    );
  }
}

export default App;
