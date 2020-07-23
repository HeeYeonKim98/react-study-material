import React, { Component } from "react";

export default class App extends Component {
  state = {
    text1: "안녕?",
    text2: "",
  };

  click = () => {
    this.setState({
      text2: "반가워 리액트!",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.text1}</div>
        <div>{this.state.text2}</div>
        <button onClick={this.click}>Press Me!</button>
      </div>
    );
  }
}
