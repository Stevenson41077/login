// src/Navbar.js
import React from "react";

function Navbar({ username }) {
  return (
    <nav>
      <div className="profile-icon">{username}</div>
    </nav>
  );
}

export default Navbar;
