import React, { useMemo } from "react";

export default function UseMemo() {
  const [count, setCount] = React.useState(0);
  const [number, setNumber] = React.useState(10);

  const expensiveComputation = () => {
    console.log("Expensive Computation Started");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += number;
    }
    return result;
  };

  const result = useMemo(() => expensiveComputation(), [number]);
  return (
    <div>
      <h1>Expensive Computation</h1>
      <h2>Expensive {result}</h2>
      <h2>Count {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
