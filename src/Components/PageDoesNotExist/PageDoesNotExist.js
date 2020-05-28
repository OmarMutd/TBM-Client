import React, { Component } from "react";
import "./PageDoesNotExist.css";

export class PageDoesNotExist extends Component {
  render() {
    return (
      <div className="wrapper">
        <img
          src="https://www.reactiongifs.com/r/brule-omg.gif"
          className="uh-oh"
          alt="shocked face"
        />
        <h1 className="notExist-A">UH-OH!</h1>
        <h2 className="notExist-B">This page doesn't exist.</h2>
      </div>
    );
  }
}

export default PageDoesNotExist;
