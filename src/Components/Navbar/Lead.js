import React, { Component } from "react";

import "./Lead.css";

class Lead extends Component {
  constructor(props) {
    super(props);
    this.text = props.text;
  }

  render() {
    return (
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto&display=swap"
          rel="stylesheet"
        />
        <div className="nav-bar-lead">{this.text}</div>
      </div>
    );
  }
}

export default Lead;
