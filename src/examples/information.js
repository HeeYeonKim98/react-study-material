import React, { Component } from "react";
import Name from "../src/components/Name";
import Num from "../src/components/Num";
import Department from "../src/components/Department";

import "./App.css";

export default class App extends Component {
  state = {
    name: "",
    num: "",
    department: "",
  };

  render() {
    return (
      <div className="hycolor">
        <Name name="희연"></Name>
        <Num num="201701614"></Num>
        <Department department="컴퓨터공학부"></Department>
      </div>
    );
  }
}
