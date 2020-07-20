import React from 'react';
import logo from './logo.svg';
import Message from './Message';
import './App.css';
 
const MESSAGE = "Welcome to my application";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <Message message={MESSAGE}></Message>
        <p>
          <small>By Alexis</small>
        </p>
      </header>
    </div>
  );
}

export default App;
