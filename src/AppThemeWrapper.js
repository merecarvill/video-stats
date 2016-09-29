import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';

class AppThemeWrapper extends Component {
  render() {
    return (
      <MuiThemeProvider>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

export default AppThemeWrapper;
