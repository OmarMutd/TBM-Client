import React, { Component } from "react";
import config from "../../config";
import Item from "../Item/Item";

export class SearchResults extends Component {
  state = {
    data: [],
    query: "",
  };

  fetchByQuery = (query) => {
    fetch(`${config.API_ENDPOINT}/products/search?searchterm=${query}`, {
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
    const query = this.props.location.state.query;
    this.setState({ query: query });
    this.fetchByQuery(query);
  }

  componentDidUpdate(prevProps) {
    const query = this.props.location.state.query;
    if (query !== prevProps.location.state.query) {
      this.fetchByQuery(query);
      this.setState({ query: query });
    }
  }

  render() {
    const value = this.state.data;

    if (value.length === 0) {
      return (
        <div className="no-results">
          <h2>We couldn't find any results for "{this.state.query}"</h2>
          <p>Try searching for something else instead?</p>
          <p> Hint: Search by product name not category name.</p>
        </div>
      );
    } else if (value.length === 1) {
      return (
        <div>
          <h2>One item matched your search for "{this.state.query}"</h2>
          <div className="all-products">
            <div className="products">
              {value.map((item) => {
                return <Item product={item} key={item.id} />;
              })}
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>
            {value.length} items matched your search for "{this.state.query}"
          </h2>
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
}

export default SearchResults;
