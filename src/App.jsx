import React from 'react';
import Home from './pages/Home.jsx';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Companies Directory</h1>
      </header>
      <main className="app-main">
        <Home />
      </main>
      <footer className="app-footer">
        <small>Companies Directory • Demo</small>
      </footer>
    </div>
  );
}

export default App;
