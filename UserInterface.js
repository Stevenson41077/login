// src/UserInterface.js
import React from "react";

function UserInterface() {
  return (
    <div>
      {/* Dropdown */}
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>

      {/* Filter Option */}
      <input type="checkbox" id="filter" name="filter" />
      <label htmlFor="filter">Filter Option</label>

      {/* Search Bar */}
      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default UserInterface;
