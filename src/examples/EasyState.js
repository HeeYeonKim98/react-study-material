import React, { Component } from "react";

export default class App extends Component {
  state = {
    name: "김희연",
  };
  render() {
    return <div>{this.state.name}</div>;
  }
}

// import React, { Component } from "react";

// export default class App extends Component {
//   state = {
//     name: "김희연",
//   };

//   button = () => {
//     this.setState({ name: "아니지롱" });
//   };
//   render() {
//     return <div onClick={this.button}>{this.state.name}</div>;
//   }
// }
