import React, { Component } from 'react';
import { bindAll } from 'class-bind';

class Video extends Component {
  constructor(props) {
    super(props);
    bindAll(Video.prototype);
  }

  render() {
    return (
      <video
        controls
        muted={this.props.muted}
        autoPlay={this.props.autoPlay}
        poster={this.props.poster}
        onPause={this.props.onPause}
        onPlay={this.props.onPlay}
        ref={(el) => { this.videoEl = el; }}
      >
        {this.renderSources(this.props.sources)}
      </video>
    );
  }

  renderSources(sources) {
    return sources.map((source, index) => {
      return <source key={index} src={source.url} type={source.type}/>
    });
  }

  addCaption(caption) {
    console.log(`addCaption(${JSON.stringify(caption)})`);
		console.log(this.videoEl);
		var textTrack = this.videoEl.addTextTrack("captions");
		textTrack.mode = "showing";
		textTrack.addCue(new window.VTTCue(caption.startTime, caption.startTime + caption.duration, caption.caption));
  }

  play() {
    this.videoEl.play();
  }

  pause() {
    this.videoEl.pause();
  }
}

export default Video;
