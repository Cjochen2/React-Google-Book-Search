import React from 'react';
import './App.css';
import Search from './pages/Search'
import Nav from './components/Nav'
import Jumbo from './components/Jumbotron';


function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbo />
      <Search />
    </div>
  );
}

export default App;
