//1
import React, { Component } from "react";

const Hy = [" 한정", " 은희", " 민정", " 희연", " 지혜", " 혜림"];

export default class App extends Component {
  render() {
    return (
      <div>
        {Hy.map((per) => {
          return per;
        })}
      </div>
    );
  }
}

//2
import React, { Component } from "react";

const Hy = [" 한정", " 은희", " 민정", " 희연", " 지혜", " 혜림"];

export default class App extends Component {
  render() {
    return (
      <div>
        {Hy.map((per) => {
          return per + "♥︎";
        })}
      </div>
    );
  }
}
