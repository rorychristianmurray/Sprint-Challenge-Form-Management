import React from "react";

const Data = props => {
  console.log("Data props", props);
  return (
    <div className="data-card">
      <div>Name: {props.data.name}</div>
      <div>Technique: {props.data.technique}</div>
    </div>
  );
};

export default Data;
