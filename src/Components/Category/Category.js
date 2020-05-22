import React, { Component } from "react";
import config from "../../config";
import Item from "../Item/Item";
import "./Category.css";

export class Category extends Component {
  state = {
    data: [],
    category: "",
  };

  fetchByCategory = (category) => {
    fetch(`${config.API_ENDPOINT}/products/category/${category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
      });
  };
  componentDidMount() {
    const category = this.props.match.params.category;
    this.setState({ category: category });
    this.fetchByCategory(category);
  }

  componentDidUpdate(prevProps) {
    const category = this.props.match.params.category;
    if (category !== prevProps.match.params.category) {
      this.fetchByCategory(category);
      this.setState({ category: category });
    }
  }

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).replace(/ -/, ":");
  };

  render() {
    const value = this.state.data;
    const category = this.state.category;
    const title = this.capitalize(category);

    return (
      <div>
        {/* Change category to plural and first letter capital */}
        <h1 className="category-title">{title}</h1>
        <div className="all-products">
          <div className="products">
            {value.map((item) => {
              return <Item product={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
