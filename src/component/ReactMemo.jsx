import React, { useState } from "react";
import ReactMemo1 from "./ReactMemo1";

export default function ReactMemo() {
  const [count, setCount] = useState(0);
  return (
    <div>
        <ReactMemo1 name="Parampreet"/>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
