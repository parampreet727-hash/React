import React, { useEffect, useState } from "react";

export default function Api() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    let res = await fetch(URL);
    res = await res.json();
    console.log(res);
    setUserData(res);
  }

  return (
    <div>
      <h1>Fetch User Data</h1>
      {userData &&
        userData.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <h2>{item.email}</h2>
              <h2>{item.phone}</h2>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
