import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class AppHeader extends Component {
  render() {
    return (
      <AppBar title={this.props.appName} showMenuIconButton={false}/>
    );
  }
}

export default AppHeader;
