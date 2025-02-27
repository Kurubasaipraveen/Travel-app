import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Wild Safari</h2>
      <ul>
        <li><a href="">Overview</a></li>
        <li><a href="">Itinerary</a></li>
        <li><a href="">Gallery</a></li>
        <li><a href="">FAQ</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
