import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "김희연",
  };
  render() {
    return <div>{this.state.name}</div>;
  }
}
