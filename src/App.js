import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello greeting="Hello" />

        <Video controls autoPlay loop muted poster="http://media.nbcchicago.com/images/971*546/GettyImages-81502920.jpg">
            <source src="https://02-lvl3-pdl.vimeocdn.com/01/2040/5/135203185/399731354.mp4?expires=1475080951&token=0622557003605e1479ac5" type="video/mp4" />
            <h1>Optional HTML and components can be added also</h1>
            <Overlay />
            <Controls>
                <Play />
                <Seek />
                <Time />
                <Mute />
                <Fullscreen />
            </Controls>
        </Video>

      </div>
    );
  }
}

export default App;
