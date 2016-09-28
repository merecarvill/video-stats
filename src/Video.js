import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <video autoPlay>
        <source src={this.props.source} type={this.props.type}/>
      </video>
    );
  }
}

export default Video;
