import React from 'react'

function ReactMemo1({name}) {
    console.log("Child Component Renderd")
  return (
    <div> 
      <h2>Child Component : {name}</h2>
    </div>
  )
}


export default React.memo(ReactMemo1)
