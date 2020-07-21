import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    number: 1,
  };

  click1 = () => {
    this.setState({
      number: this.state.number * 2,
    });
  };

  click2 = () => {
    this.setState({
      number: this.state.number / 2,
    });
  };

  click3 = () => {
    this.setState({
      number: 1,
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.number}</div>
        <button onClick={this.click1}>next</button>
        <button onClick={this.click2}>previous</button>
        <button onClick={this.click3}>clear</button>
      </div>
    );
  }
}
