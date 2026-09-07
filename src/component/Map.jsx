import React, { useState } from "react";

export default function Map() {
  const [vegies, setVegies] = useState(["Carrot", "Potato", "Tomato"]);
  const fruits = ["Apple", "Banana", "Mango", "Cherry"];

  function addFruit() {
    const item = [];
    for (let i = 0; i < fruits.length; i++) {
      item.push(<li>{fruits[i]}</li>);
    }
    return item;
  }

  return (
    <div>
      <h1>Map Loops</h1>
      <h2>Fruits</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h2>Vegetables</h2>
      <ul>
        {vegies.map((vegie, index) => (
          <li key={index}>{vegie}</li>
        ))}
      </ul>

      <ul>{addFruit()}</ul>
    </div>
  );
}
