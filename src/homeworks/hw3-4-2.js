import React, { Component } from "react";

const Star = ({ name, job, image }) => {
  return (
    <div>
      <div>이름 : {name}</div>
      <div>직업 : {job}</div>
      <img src={image}></img>
    </div>
  );
};

const hyStar = [
  {
    name: "지창욱",
    job: "배우",
    image: "",
  },
  {
    name: "아이린",
    job: "가수",
    image: "",
  },
];

export default class App extends Component {
  render() {
    return (
      <div>
        {hyStar.map((hystar) => {
          return (
            <Star
              name={hystar.name}
              job={hystar.job}
              image={hystar.image}
            ></Star>
          );
        })}
      </div>
    );
  }
}
