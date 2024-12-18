"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      return theme === null || theme === 'dark'; // Predeterminado a oscuro si no hay tema almacenado
    }
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="relative w-16 h-8 flex items-center 
                dark:bg-[#263c73b3] bg-[#C8B6F8]/90 cursor-pointer rounded-full p-1 focus:outline-none"
      onClick={() => setDarkMode(!darkMode)}
    >
      <BsSunFill className="text-black" size={18} />
      <div className="absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300"
        style={darkMode ? { left: "2px" } : { right: "2px" } }
      >        
      </div>
      <FaMoon className="ml-auto text-white" size={18} />
    </button>
  );
};

export default ThemeToggle;