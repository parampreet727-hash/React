import React from "react";

export default function FunctionAsProps({channelName, name}) {
  return (
    <div>
      <button onClick={()=>channelName(name)}>Subscribe</button>
    </div>
  );
}
