import React, { Component } from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { bindAll } from 'class-bind';

import videoSource from "./duke-vs-unc-1941.mp4";
import Video from './Video.js';
import CaptionForm from './CaptionForm.js';
import CaptionList from './CaptionList.js';
import AppHeader from './AppHeader.js';

class App extends Component {
  constructor(props) {
    super(props);
    bindAll(App.prototype);

    this.state = {
      paused: false,
			currentTime: 0.0,
			captions: []
    }
  }

  render() {
    const sources = [
      { url: videoSource, type: "video/mp4" }
    ];

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className="App">
          <AppHeader appName="DopeShow Video"/>

          <div className="video-container">
            <Video
              muted
              autoPlay
              sources={sources}
              onPause={this.handlePause}
              onPlay={this.handlePlay}
              onSeeked={this.handleSeeked}
              ref="videoPlayer"
              captions={this.state.captions}
            />
          </div>

          <CaptionForm
            startTime={this.state.currentTime}
            visible={this.state.paused}
            onSaveCaption={this.handleSaveCaption}
            onStartCaption={ () => this.refs.videoPlayer.pause() }
          />

          <CaptionList
            captions={this.state.captions}
          />
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

  handleSeeked(e) {
    this.setState({ currentTime: e.currentTarget.currentTime });
  }

  handleSaveCaption(caption) {
    this.refs.videoPlayer.addCaption(caption);
    this.refs.videoPlayer.play();
    this.addCaption(caption);
  }

  addCaption(caption) {
    const captions = [...this.state.captions, caption];
    this.setState({captions: captions});
  }
}

export default App;
