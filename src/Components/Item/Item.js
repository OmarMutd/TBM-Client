import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
    render() {
        return (
            <div class="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtUQdOKmmgn-99UsXqWW9Y3Bq_3yQ0XIUG6Jy9VCT9VBh08LPgu-1MvsUbLx7l4kAhuxLVqdU&usqp=CAc" alt="Black Socks" style="width:100%"></img>
                <h1>Black Socks</h1>
                <p class="price">$12.99</p>
                <p>Some text about the jeans..</p>
                <p>Quantity: <select id="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <button>Add to Cart</button></p>
            </div>
        )
    }
}
