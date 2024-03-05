// src/App.js
import React from 'react';
import './App.css';
import SearchMovies from './components/SearchMovies';

function App() {
  return (
    <div className="App">
      <h1 className="title">Movie Explorer System</h1>
      <SearchMovies />
    </div>
  );
}

export default App;
