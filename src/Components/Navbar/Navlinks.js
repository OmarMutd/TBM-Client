import React, { Component } from "react";

import "./Navlinks.css";

class Navlinks extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
  }

  render() {
    return <div className="nav-bar-item">{this.text}</div>;
  }
}

export default Navlinks;
