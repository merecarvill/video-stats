import React, { Component } from 'react';
import { bindAll } from 'class-bind';

import Video from './Video.js';
import videoSource from "./crazy-funny-football-play-with-band.mp4";
import AppHeader from './AppHeader.js';
import AppThemeWrapper from './AppThemeWrapper.js'
import CaptionForm from './CaptionForm.js';
import CaptionList from './CaptionList.js';

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
      <AppThemeWrapper>
        <div>

          <div style={{ marginLeft:"auto", marginRight:"auto", textAlign:"center", width:"1350px" }}>
            <div style={{ width:"500px", float:"left" }}>
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

              <CaptionForm
                startTime={this.state.currentTime}
                visible={this.state.paused}
                onSaveCaption={this.handleSaveCaption}
                onStartCaption={ () => this.refs.videoPlayer.pause() }
              />
            </div>

            <div style={{ margin:"20px", width:"500px", float:"left" }}>
              <CaptionList
                captions={this.state.captions}
                onRowSelection={this.handleRowSelection}
              />
            </div>
          </div>
        </div>
      </AppThemeWrapper>
    );
  }

  handleRowSelection(captionIndex){
    this.refs.videoPlayer.seek(this.state.captions[captionIndex].startTime)
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
