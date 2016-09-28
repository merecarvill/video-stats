import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <video controls onPause={() => { console.log("paused") }}>
        {this.renderSources(this.props.sources)}
      </video>
    );
  }

  renderSources(sources) {
    return sources.map((source, index) => {
      return <source key={index} src={source.url} type={source.type}/>
    });
  }
}

export default Video;
