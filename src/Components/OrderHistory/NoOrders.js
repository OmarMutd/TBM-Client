import React, { Component } from 'react'

export default class NoOrders extends Component {

    state = {
        header: '',
        tagline: ''
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                header: "You have not purchased anything yet from The Black Market",
                tagline: "Looking for inspiration? Browse our inventory and see all the amazing products available on the market!"
            })
        }, 200)
    }

    render() {
        return (
            <div className=".1cart">
                <h1>{this.state.header}</h1>
                <p>{this.state.tagline}</p>
            </div>
        )
    }
}
