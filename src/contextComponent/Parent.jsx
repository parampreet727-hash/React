import React from 'react'
import Child from './Child'

export default function Parent() {
  return (
    <div className="bg-danger p-5">
      <h1 className="text-white">Parent Component</h1>
      <Child/>
    </div>
  )
}
