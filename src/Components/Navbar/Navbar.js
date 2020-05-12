import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import TokenService from '../../services/token-services';

export default class Navbar extends Component {

    handleSignOutClick = () => {
      TokenService.clearAuthToken()
      
    }
  
    render() {
        return (
            <div>
               <nav role='navigation'>
      <ul className='basic-nav'>
        <Link to ='/OrderHistory'><li>Order History</li></Link>
        <Link to='/'><li>Sign Out</li></Link>
        <Link to ='/cart'><li>Cart</li></Link>
      </ul>
      <h1 className="logo"><a href="www.google.com">TBM</a></h1>
      <input type="text" placeholder="search"/>
      <br/>
      <ul className="categories">
        <li><a href="www.google.com">Category 1</a></li>
        <li><a href="www.google.com">Category 2</a></li>
        <li><a href="www.google.com">Category 3</a></li>
      </ul>
    </nav>
            </div>
        )
    }
}


