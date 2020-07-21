import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    number: 0,
  };

  click1 = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  click2 = () => {
    this.setState({
      number: this.state.number - 1,
    });
  };

  render() {
    return (
      <div className="hycolor">
        <div>{this.state.number}</div>
        <button onClick={this.click1}>+</button>
        <button onClick={this.click2}>-</button>
      </div>
    );
  }
}
