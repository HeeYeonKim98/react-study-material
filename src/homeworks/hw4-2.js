import React, { Component } from "react";

export default class App extends Component {
  state = {
    five: "",
    number: 0,
  };

  Five = () => {
    if (this.state.number % 5 === 0) {
      setTimeout(() => {
        this.setState({
          five: "5의 배수입니다.",
        });
      }, 2000);
    } else {
      this.setState({ five: "5의 배수가 아닙니다" });
    }
  };

  Plus = () => {
    this.setState(
      {
        number: this.state.number + 1,
      },
      this.Five
    );
  };

  render() {
    const { five, number } = this.state;

    return (
      <div>
        <div>{number}</div>
        <div>{five}</div>
        <button onClick={this.Plus}>+++</button>
      </div>
    );
  }
}
