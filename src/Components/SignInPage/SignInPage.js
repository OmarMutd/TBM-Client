import React, { Component } from 'react';
import TokenService from '../../services/token-services'
import AuthApiService from '../../services/auth-api-services'
import { Link } from 'react-router-dom';
import './SignInPage.css';

export default class SignInPage extends Component {

  static defaultProps = {
    onLoginSuccess: () => { }
  }

  state = {
    error: null
  }

  handleSubmitJwtAuth = e => {
    e.preventDefault()
    this.setState({ error: null })

    const username = e.target.elements[0].value
    const password = e.target.elements[1].value

    AuthApiService.postLogin({
      username: username,
      password: password
    })
      .then(res => {

        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()

      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }


  render() {
    const { error } = this.state
    return (
      <div className='sign-in-page'>
        <div role="alert">
          {error && <p className="sign-error">{error}</p>}
        </div>
        <form
          className='signup-form'
          onSubmit={this.handleSubmitJwtAuth}
        >
          <h2 className="signup-header">Sign In</h2>

          <div className="username-signup">
            <label htmlFor='username-input'></label>
            <input
              id='username-input'
              placeholder='Username'
              className='input-field'
              type='text'
              required
            />
          </div>
          <br />
          <div className="password-signup">
            <label htmlFor='password-input'></label>
            <input
              id='password-input'
              placeholder='Password'
              className='input-field'
              type='text'
              required
            />
          </div>

          <div className='useful-buttons'>
            <button type="submit" className="sign">Sign In</button>

            <Link to='/'><button>Go back</button></Link>
            {/* <label htmlFor='signup-button'>Not a registered user? Click here to Sign up.</label> */}
            <Link to='/SignUpPage'><button className='signup-button'>Sign Up</button></Link>
          </div>

        </form>
      </div>
    )
  }
}


