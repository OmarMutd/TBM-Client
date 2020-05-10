import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default class Navbar extends Component {
  
    render() {
        return (
          <div>
            <nav role='navigation'>
              <ul className='basic-nav'>
                <li><Link to='/OrderHistory'>Order History</Link></li>
                <li><Link to='/'>Sign Out</Link></li>
                <li><Link to='/Cart'>Cart</Link></li>
              </ul>
              <h1 className="logo"><Link to='/Products'>TBM</Link></h1>
              <input type="text" placeholder="search"/>
              <br/>
              <ul className="categories">
                <li><a href="www.google.com">Animals</a></li>
                <li><a href="www.google.com">Vehicles</a></li>
                <li><a href="www.google.com">Clothing</a></li>
                <li><a href="www.google.com">Furniture</a></li>
              </ul>
            </nav>
          </div>
        )
    }
}


