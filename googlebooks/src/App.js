import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Jumbo from './components/Jumbotron';
import SearchBar from './components/SearchBar';
import Results from './components/Results';

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbo />
      <SearchBar />
      <Results />
    </div>
  );
}

export default App;
