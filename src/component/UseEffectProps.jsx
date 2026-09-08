import React, { useState } from "react";
import UseEffectProps1 from "./UseEffectProps1";

export default function UseEffectProps() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  return (
    <div>
      <h1>Parent Component</h1>
      <UseEffectProps1 count={count} data={data} />
      <button onClick={() => setCount(count + 1)}>Count : </button>
      <button onClick={() => setData(data + 1)}>Data : </button>
    </div>
  );
}
