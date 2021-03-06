import React, { Component } from "react";
import axios from "axios";

import List from "../src/components/List";

//https://hylistrestapi.herokuapp.com/
//https://localhost:9001/

export default class App extends Component {
  state = {
    list: [],
    isLoading: true,
  };

  getList = async () => {
    const {
      data: {
        data: { list },
      },
    } = await axios.get("https://hylistrestapi.herokuapp.com/");

    this.setState(
      {
        list,
        isLoading: false,
      },
      console.log(this.state.isLoading)
    );
  };

  componentDidMount() {
    this.getList();
  }

  render() {
    const { isLoading, list } = this.state;

    return (
      <div>
        {isLoading
          ? "로딩중!~!!"
          : list.map((i) => {
              return (
                <List
                  key={i.key}
                  name={i.name}
                  age={i.information.age}
                  area={i.information.address.area}
                />
              );
            })}
      </div>
    );
  }
}
