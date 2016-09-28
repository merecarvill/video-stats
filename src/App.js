import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import videoSource from "./duke-vs-unc-1941.mp4";
import Hello from './Hello.js';
import Video from './Video.js';
import CaptionForm from './CaptionForm.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: false
    }
    this.handlePause = this.handlePause.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  render() {
    const sources = [
      { url: videoSource, type: "video/mp4" }
    ];

    return (
      <MuiThemeProvider>
        <div className="App">
            <div className="App-header">
              <h2>DopeShow Video</h2>
            </div>

            <div className="video-container">
              <Video
                muted
								sources={sources}
								onPause={this.handlePause}
								onPlay={this.handlePlay}
								></Video>
            </div>

            <CaptionForm visible={!this.state.paused} />
        </div>
      </MuiThemeProvider>
    );
  }

  handlePause() {
    this.setState({ paused: true })
    console.log("paused!");
  }

  handlePlay() {
    this.setState({ paused: false })
    console.log("start!");
  }
}

export default App;
