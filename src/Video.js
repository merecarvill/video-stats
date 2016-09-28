import React, { Component } from 'react';

class Video extends Component {
  constructor(props) {
    super(props);

    this.addCaption = this.addCaption.bind(this);
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
  }
}

export default Video;
