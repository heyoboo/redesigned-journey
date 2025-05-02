import React, { useState, useEffect } from 'react';

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return storedTheme === 'dark' || (!storedTheme && prefersDark);
    }
    return false;
  });

  useEffect(() => {    
    const html = document.documentElement;
    if (isDarkMode) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleTheme} id="theme-toggle" className="bg-transparent border-none p-0 cursor-pointer">
      {isDarkMode ? 'LIGHT' : 'DARK'}
    </button>
  );
}

export default ThemeToggle;