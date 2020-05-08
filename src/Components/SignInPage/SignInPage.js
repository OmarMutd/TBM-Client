import React, { Component } from 'react'
import './SignInPage.css'

export default class SignInPage extends Component {
    render() {
        return (
            <div>
              
     
        <h2>Sign In</h2>
        <form>
          <label for="Username">Username</label><br/>
          <input type="text" id="Username"/><br/>
          <label for="Password">Password</label><br/>
          <input type="text" id="Password"/><br/>
          <button type="button">Submit</button>
          </form>
          
            </div>
        )
    }
}


