import React from "react";

const List = ({ name, age, area }) => {
  return (
    <div>
      <div>
        {name} {age} {area}
      </div>
    </div>
  );
};

export default List;
