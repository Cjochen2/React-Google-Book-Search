import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Jumbo from './components/Jumbotron';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbo />
      <SearchBar />
    </div>
  );
}

export default App;
