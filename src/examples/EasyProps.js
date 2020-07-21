import React, { Component } from "react";
import "./App.css";

const Ex = (props) => {
  console.log(props);

  return (
    <div>
      {props.a} {props.b}
    </div>
  );
};

export default class App extends Component {
  render() {
    return (
      <div>
        <Ex a="hi" b="hy"></Ex>
      </div>
    );
  }
}
