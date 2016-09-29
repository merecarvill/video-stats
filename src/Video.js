import { bindAll } from 'class-bind';
import React, { Component } from 'react';

class Video extends Component {
  constructor(props) {
    super(props);

    this.addCaption = this.addCaption.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
		this.textTrack = undefined;
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
        onSeeked={this.props.onSeeked}
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
		if ( this.textTrack === undefined ) {
			this.textTrack = this.videoEl.addTextTrack("subtitles");
			this.textTrack.mode = "showing";
		}
		this.textTrack.addCue(new window.VTTCue(caption.startTime, caption.startTime + caption.duration, caption.caption));
  }

  play() {
    this.videoEl.play();
  }

  pause() {
    this.videoEl.pause();
  }

  seek(time) {
    this.videoEl.currentTime = time;
  }
}

export default Video;
