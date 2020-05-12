import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import  config from '../../config';



export default class SingleItem extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        debugger
        console.log('hello')
     setTimeout(this.getSingleItem, 200)
    }

    getSingleItem = () => {
        const id = this.props.match.params
        console.log(id)
        console.log(this.state.data)

        fetch(`${config.API_ENDPOINT}/products/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(data => {this.setState({data: data})});
    };
    render() {
        const {id, title, description, category, price, url} = this.state.data
        console.log(this.state.data)
        return (
            <div>
                 <div className='item-card'>
                     <div className='item-image' onClick={() => console.log('This is the image')}>
                         <Link to={{pathname:`/SingleItem/${id}`}}><img src={url} /></Link>
                     </div>
                     <button onClick={() => console.log('Item has been added to cart!')}>Add to Cart</button>
                     <div className='product-information'></div>
                      <p>{title}</p>
                      <p>{price}</p>
                      <p>Category: {category}</p>
                 </div>
            
            </div>
        )
    }
}


