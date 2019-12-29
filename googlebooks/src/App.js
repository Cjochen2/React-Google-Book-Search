import React from 'react';
import './App.css';
import Search from './pages/Search'
import Saved from './pages/Saved'
import Nav from './components/Nav'
import Jumbo from './components/Jumbotron';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Jumbo />
        <Switch >
          <Route exact path='/'>
            <Search />
          </Route>
          <Route exact path='/saved'>
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
