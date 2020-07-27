import React, { Component } from "react";
import Life from "../src/examples/Life";

export default class App extends Component {
  state = {
    text1: "안녕?",
    text2: "",
  };

  render() {
    return <Life></Life>;
  }
}
