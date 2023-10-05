// src/DataTable.js
import React, { useState } from "react";

function DataTable({ data }) {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "" || item.category === filter)
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Category1">Category1</option>
          <option value="Category2">Category2</option>
          {/* Add more category options */}
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            {/* Add more table headers */}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              {/* Add more table data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
