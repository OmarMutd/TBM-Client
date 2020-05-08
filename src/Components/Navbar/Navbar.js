import React, { Component } from 'react'
import "./Navbar.css"

export default class Navbar extends Component {
    render() {
        return (
            <div>
               <nav role='navigation'>
      <ul className='basic-nav'>
        <li><a href="">Order History</a></li>
        <li><a href="">Sign Out</a></li>
        <li><a href="">Cart</a></li>
      </ul>
      <h1 class="logo"><a href="">TBM</a></h1>
      <input type="text" placeholder="search"/>
      <br/>
      <ul class="categories">
        <li><a href="">Category 1</a></li>
        <li><a href="">Category 2</a></li>
        <li><a href="">Category 3</a></li>
      </ul>
    </nav>
            </div>
        )
    }
}


