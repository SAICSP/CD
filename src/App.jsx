import React, { useEffect, useState } from 'react';
import Home from './pages/Home';

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Apply theme class to <body>
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <header className="header">
        <h1>Companies Directory</h1>
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </header>

      <Home />
    </>
  );
}
