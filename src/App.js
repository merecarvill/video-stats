import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import Hello from './Hello.js';
import Video from './Video.js';
import CaptionForm from './CaptionForm.js';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      paused: false
    }

  }

  render() {
    const sources = [
      { url: "https://media.w3.org/2010/05/sintel/trailer.mp4", type: "video/mp4" }
    ];

    return (
      <MuiThemeProvider>
        <div className="App">
            <div className="App-header">
              <h2>DopeShow Video</h2>
            </div>

            <div className="video-container">
              <Video sources={sources}></Video>
            </div>
            
            <CaptionForm visible={!this.state.paused} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
