import { method } from "bluebird";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  // store the data coming from the API here
  const [users, setUsers] = useState([]);

  {
    /* Get data from the API */
  }
  useEffect(() => {
    //  Get from this destination
    fetch("https://jsonplaceholder.typicode.com/users")
      // Return the data from the API
      .then((res) => {
        return res.json();
      })
      // Print the data in the console log to see if it works
      // .then(data => console.log(data))
      // Put the data in the hook
      .then((data) => setUsers(data));
  });

  // Post to API
  // useEffect(() => {
  //   fetch("https:jsonplaceholder.typicode.com/users")
  //   // Post to API
  //   method: 'POST',
  //   headers: {
  //     'Content-type':'application.json'
  //   }
  // }

  return (
    <div className="App">
      <h1>Hello</h1>
      {users.map((users) => {
        return (
          <div>
            <h3>{users.name} lives in {users.address.city}</h3>
            <p>Email id: {users.email} </p>

          </div>
        );
      })}
    </div>
  );
}

export default App;
