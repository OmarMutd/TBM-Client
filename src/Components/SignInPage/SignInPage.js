import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignInPage.css';

export default class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          error: '',
        }
      }

      handleUsername = e => {
        this.setState({ username: e.target.value })
      }
    
      handlPassword = e => {
        this.setState({ password: e.target.value })
      }
      
      render() {
        return (
            <div>
                <form className='signup-form'>
                    <h2 className="signup-header">Sign In</h2>

                    <div className="username-signup">
                    <label htmlFor='username-input'></label>
                    <input
                    id='username-input'
                    placeholder='Username'
                    className='input-field'
                    type='text'
                    value={this.state.username}
                    onChange={this.handleUsername}
                    />
                    </div>
                    <br/>
                    <div className="password-signup">
                   <label htmlFor='password-input'></label>
                    <input
                    id='password-input'
                    placeholder='Password'
                    className='input-field'
                    type='text'
                    value={this.state.password}
                    onChange={this.handlPassword}
                    />
                   </div>

                   <div className='useful-buttons'>
                       <button>Sign In</button>
                       
                       <Link to='/'><button>Go back</button></Link>
                       {/* <label htmlFor='signup-button'>Not a registered user? Click here to Sign up.</label> */}
                       <Link to='/SignUpPage'><button type="signup-button">Sign Up</button></Link>
                   </div>

                </form>
            </div>
        )
    }
}


