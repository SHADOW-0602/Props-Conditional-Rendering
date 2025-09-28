import React from "react";

const Greeting = ({ name }) => {
  return (
    <h2>
      {name ? `Hello, ${name}!` : "Hello, Guest!"}
    </h2>
  );
};

export default Greeting;