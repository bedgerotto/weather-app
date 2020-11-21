import React from 'react';
import HomePage from './HomePage';
import './App.css';
import { KeywordStore } from './store'
import NavBar from 'react-bootstrap/Navbar'
import { Navbar } from 'react-bootstrap';
const keywordStore = new KeywordStore();

function App() {
  return (
    <div className="App">
      <NavBar bg="primary" expand="lg" variant="dark">
        <Navbar.Brand hreg="#home">Weather App</Navbar.Brand>
      </NavBar>
      <HomePage keywordStore={keywordStore} />
    </div>
  );
}

export default App;
