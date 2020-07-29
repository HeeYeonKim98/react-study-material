import React, { Component } from "react";

export default class App extends Component {
  state = {
    string: "안녕",
  };

  onClick = () => {
    setTimeout(() => {
      this.setState({
        string: "반가워",
      });
    }, 3000);
  };

  render() {
    const { string } = this.state;
    return (
      <div>
        <div>{string}</div>
        <button onClick={this.onClick}>press me!</button>
      </div>
    );
  }
}
