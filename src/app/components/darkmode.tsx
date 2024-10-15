"use client";

import React, { useEffect, useState } from "react";

// Define the type for your component (optional with TypeScript)
const DarkModeToggle: React.FC = () => {
  // State to track the current theme
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Check for saved theme in localStorage
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="w-14 h-[100%] overflow-hidden bg-gray-200  dark:bg-gray-700 rounded-full relative transition-colors duration-300"
    >
      <span
        className={`${
          darkMode ? "translate-x-7" : "translate-x-0"
        } w-7 h-[100%] bg-white dark:bg-gray-800 rounded-full absolute top-0 left-0 transform transition-transform duration-300`}
      />
    </button>
  );
};

export default DarkModeToggle;
