import React, { useEffect } from "react";

export default function UseEffectProps1({ count, data }) {
  function handleData() {
    console.log("Data Clicked");
  }

  function handleCount() {
    console.log("Count Clicked");
  }

  useEffect(() => {
    handleCount();
    handleData();
  }, []);
  return (
    <div>
      <h1>Count :{count}</h1>
      <h2>Data : {data}</h2>
    </div>
  );
}
