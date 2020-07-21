import React, { Component } from "react";

import "./App.css";
import Info from "./components/Info";

export default class App extends Component {
  render() {
    return (
      <div>
        <Info
          name="김희연"
          age="100"
          phone="01048728029"
          address="인천광역시 송도동"
        ></Info>
      </div>
    );
  }
}
