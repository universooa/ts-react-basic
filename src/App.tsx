import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button';

function App() {
  const alarm = () => {
    alert('Hi~');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Button width={100} onClick={alarm}>
            <div>This is Button</div>
          </Button>
          <main />

        </div>
      </header>
    </div>
  );
}

export default App;
