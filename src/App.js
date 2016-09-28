import React, { Component } from 'react';

import './App.css';
import videoSource from "./duke-vs-unc-1941.mp4";
import Hello from './Hello.js';
import Video from './Video.js';

class App extends Component {
  render() {
    const sources = [
      { url: videoSource, type: "video/mp4" }
    ];

    return (
      <div className="App">
        <div className="App-header">
          <h2>DopeShow Video</h2>
        </div>
        <Hello greeting="Hello" />

        <Video muted sources={sources}></Video>
      </div>
    );
  }
}

export default App;
