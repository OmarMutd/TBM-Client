import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage';
import SignInPage from './Components/SignInPage/SignInPage';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Item from './Components/Item/Item';
import OrderHistory from './Components/OrderHistory/OrderHistory';
import OrderView from './Components/OrderView/OrderView';
import Products from './Components/Products/Products';
import PageDoesNotExist from './Components/PageDoesNotExist/PageDoesNotExist';
import Navbar from './Components/Navbar/Navbar';
import SingleItem from './Components/SingleItem/SingleItem';
import Category from './Components/Category/Category';




function App() {

  return (
    <div className='App'>
      <Navbar/>
    <Switch>
       <Route exact path='/' component={LandingPage} />
       <Route path='/SignInPage' component={SignInPage} />
       <Route path='/SignUpPage' component={SignUpPage} />
       <Route path='/Cart' component={Cart} />
       <Route path='/Checkout' component={Checkout} />
       <Route path='/Item' component={Item} />
       <Route path='/OrderHistory' component={OrderHistory} />
       <Route path='/OrderView' component={OrderView} />
       <Route path='/Products' component={Products} />
       <Route path='/Category/:category' component={Category} />
       <Route path='/SingleItem/:id' component={SingleItem} />
       <Route component={PageDoesNotExist} />
       </Switch>
    </div>
  );
}

export default App;
