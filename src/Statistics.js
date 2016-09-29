import React, { Component } from 'react';
import { bindAll } from 'class-bind';
import RaisedButton from 'material-ui/RaisedButton';

import './App.css';


class Statistics extends Component {
  render() {
    if (this.props.visible) {
      return(
          <div>"Statistics go here"</div>
      );
    } else {
      return(
        <RaisedButton
          label="View Statistics"
          onClick={this.props.onStartCaption} primary={true}
        />
      );
    }
  }
}

export default Statistics;
