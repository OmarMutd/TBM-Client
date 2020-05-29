import { Link } from "react-router-dom";
import React, { Component } from 'react'
import LoginContext from '../../LoginContext'

export default class Buttons extends Component {
    static contextType = LoginContext

    renderButtons() {
        return(
            <div>
                <Link to={{ pathname: "/SignIn", state: { fromLanding: true } }}>
                <button type="button">Sign In</button>
                </Link>
                <Link to={{ pathname: "/SignUp", state: { fromLanding: true } }}>
                <button type="button">Sign Up</button>
                </Link> 
            </div>
        )
    }

    render() {
        if(this.context.loggedIn === false) {
            return(
                this.renderButtons()
            )
        } else{
            return (
                <div>
                    
                </div>
            )

        }
    }
}
