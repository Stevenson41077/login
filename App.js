// src/App.js
import React, { useState } from "react";
import Login from "./Login";
import DataTable from "./DataTable"; // Import the DataTable component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [data] = useState(generateRandomData());

  function generateRandomData() {
    const categories = ["Category1", "Category2", "Category3"];
    const randomData = [];

    for (let i = 1; i <= 20; i++) {
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];
      const randomName = getRandomName();
      randomData.push({
        name: randomName,
        category: randomCategory,
      });
    }

    return randomData;
  }

  function getRandomName() {
    const firstNames = ["John", "Alice", "Bob", "Eva"];
    const lastNames = ["Smith", "Johnson", "Brown", "Lee"];
    const randomFirstName =
      firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName =
      lastNames[Math.floor(Math.random() * lastNames.length)];

    return `${randomFirstName} ${randomLastName}`;
  }

  const handleLogin = (enteredUsername) => {
    setIsLoggedIn(true);
    setUsername(enteredUsername);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h1>Welcome, {username}!</h1>
          <DataTable data={data} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
