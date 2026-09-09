import React, { useRef } from "react";

export default function FrowardRef() {
  const inputRef = useRef();

  const handleFocus = () => {
    console.log("Clicked");
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.value = "Parampreet";
  };
  return (
    <div>
      <h1>React ForwardRef</h1>
      <input type="text" ref={inputRef} />
      <br />
      <br />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
