import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Some kinda Header </h1>
        <p>
          In a React App
        </p>
        <Person />
      </div>
    );
  }
}

export default App;
