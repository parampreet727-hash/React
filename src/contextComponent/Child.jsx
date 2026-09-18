import React, { useContext } from 'react'
import { UserContext } from '../UserContext'

export default function Child() {
    const {user, setUser}=useContext(UserContext);
  return (
    <div className="bg-info p-5">
      <h1 className="text-dark">Child Component : {user}</h1>
      <button onClick={()=>setUser("Parampreet Dhatt")}>Click Me!</button>
    </div>
  )
}
