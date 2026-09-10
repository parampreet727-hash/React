import React, { useState } from "react";

export default function ObjectUseState() {
  const [user, setUser] = useState({
    name: "Parmpreet Dhatt",
    age: 24,
    address: {
      city: "Sunam",
      State: "Punjab",
    },
  });

  const updateAge = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  const updateCity = () => {
    setUser({ ...user, city: (user.address.city = "Dharamgarh") });
  };

  return (
    <div>
      <h1>Updation Object in State</h1>
      <h3>Name : {user.name}</h3>
      <h3>Age : {user.age}</h3>
      <h3>City : {user.address.city}</h3>
      <h3>State : {user.address.State}</h3>

      <button onClick={updateAge}>Update Age</button>
      <button onClick={updateCity}>Update City</button>
    </div>
  );
}
