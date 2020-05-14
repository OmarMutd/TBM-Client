import React, { Component } from 'react';
import  config from '../../config';
import Item from '../Item/Item';



export class Category extends Component {
    state ={
        data: [],
        category: ''
    };
    componentDidMount() {
        const category = this.props.match.params.category;
        this.setState({category: category})
        console.log(category)
        fetch(`${config.API_ENDPOINT}/products/category/${category}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data =>  {this.setState({ data: data })});
        }
    render() {
        const value = this.state.data;
        return (
            <div>
                {/* Change category to plural and first letter capital */}
                <h2>{this.state.category}</h2>
                <div className='all-products'>
                        <div className='products'>
                             {value.map(item => {
                              return <Item product={item} key={item.id} />;
                            })}
                        </div>
                    </div>
            </div>
        )
    }
}

export default Category;
