import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "희연",
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentWillMount (deprecated)");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  click = () => {
    this.setState({
      name: "한정",
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        <div onClick={this.click}>{this.state.name}</div>
      </div>
    );
  }
}
