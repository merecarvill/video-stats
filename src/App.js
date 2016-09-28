import React, { Component } from 'react';
import './App.css';
import Hello from './Hello.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>DopeShow Video</h2>
        </div>
        <Hello greeting="Hello" />
      </div>
    );
  }
}

export default App;
