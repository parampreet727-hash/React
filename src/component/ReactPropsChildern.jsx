import React from "react";

function ReactChild({name, age}) {
  return (
    <div>
      <h1>Child Com.</h1>
      <h2>My Name is {name}</h2>
      <h3>I'm {age} years old.</h3>
    </div>
  );
}

export default function ReactPropsChildern() {
  return (
    <div>
      <h1>Parent Com</h1>
      <ReactChild name="Parampreet Dhatt" age={25} />
    </div>
  );
}
