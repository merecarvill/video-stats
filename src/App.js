import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { bindAll } from 'class-bind';

import './App.css';
import videoSource from "./duke-vs-unc-1941.mp4";
import Video from './Video.js';
import CaptionForm from './CaptionForm.js';
import Statistics from './Statistics.js';

class App extends Component {
  constructor(props) {
    super(props);
    bindAll(App.prototype);

    this.state = {
      paused: false,
      currentTime: 0.0
    }
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
              autoPlay
              sources={sources}
              onPause={this.handlePause}
              onPlay={this.handlePlay}
              ref="videoPlayer"
            />
          </div>

          <CaptionForm
            startTime={this.state.currentTime}
            visible={this.state.paused}
            onSaveCaption={this.handleSaveCaption}
            onStartCaption={ () => this.refs.videoPlayer.pause() }
          />

          <Statistics />
        </div>
      </MuiThemeProvider>
    );
  }

  handlePause(e) {
    this.setState({ paused: true, currentTime: e.currentTarget.currentTime });
  }

  handlePlay() {
    this.setState({ paused: false });
  }

  handleSaveCaption(caption) {
    this.refs.videoPlayer.addCaption(caption);
    this.refs.videoPlayer.play();
  }
}

export default App;
