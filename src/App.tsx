import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input/Input';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input />
        <Button> Sign In </Button>
      </header>
    </div>
  );
}

export default App;
