import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import logoSource from './logo-ncsa.png';

class AppHeader extends Component {
  render() {
    return (
      <AppBar
        title={this.props.appName}
        titleStyle={{ textAlign: "left" }}
        showMenuIconButton={false}
      >
        <div style={{ padding: "5px" }}>
          <img src={logoSource} alt="logo"/>
        </div>
      </AppBar>
    );
  }
}

export default AppHeader;
