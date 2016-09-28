import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class CaptionForm extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if (this.props.visible) {
      return(
        <form className="captionForm" onSubmit={this.handleSubmit}>
          <TextField 
            placeholder="Enter caption"
          />
          <br/>
          <TextField 
            placeholder="Start time"
          />
          <br/>
          <TextField 
            placeholder="End time"
          />
        </form>
      );
    } else {
      return null;
    }
  }
}

export default CaptionForm;
