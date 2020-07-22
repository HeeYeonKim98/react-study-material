import React, { Component } from "react";

const Hy = ["aa", "bb", "cc", "dd"];

export default class App extends Component {
  state = {
    name: "김희연",
  };

  render() {
    return (
      <div>
        {Hy.map((per) => {
          return per + "11";
        })}
      </div>
    );
  }
}
