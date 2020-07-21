import React from "react";

// export default class Name extends Component {
//   render() {
//     return <div>{this.props.name}</div>;
//   }
// }

const Name = ({ name, hy }) => {
  return (
    <div>
      내이름은 {name} {hy}
    </div>
  );
};

export default Name;
