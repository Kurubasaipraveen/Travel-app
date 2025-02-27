import React from "react";
import "../styles/DarkModeToggle.css";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default DarkModeToggle;
