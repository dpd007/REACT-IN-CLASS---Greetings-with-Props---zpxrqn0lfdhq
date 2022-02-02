// write code for Welcome component here
import React from "react";
const Welcome = (props) => {
  return (
    <div className="welcome__container">
      <h1>Hey {props.name}!</h1>
      <h2></h2>
    </div>
  );
};

export default Welcome;
