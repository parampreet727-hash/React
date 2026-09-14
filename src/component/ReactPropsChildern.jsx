import React from "react";

function ReactChild( {children} ) {
  return (
    <div>
      <h1>Children Com</h1>
      {children}
    </div>
  );
}

export default function ReactPropsChildern() {
  return (
    <div>
      <h1>Parent Com</h1>
      <ReactChild>
        <p>Children Component</p>
      </ReactChild>
    </div>
  );
}
