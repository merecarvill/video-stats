import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class CaptionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caption: "",
      startTime: this.props.startTime,
      endTime: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log("submit");
  }

  handleChange(e) {
    const change = {};
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    change[fieldName] = fieldValue;
    this.setState(change);
  }

  render() {
    if (this.props.visible) {
      return(
        <form className="captionForm">
          <TextField
            placeholder="Enter caption"
            name="caption"
            value={this.state.caption}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            placeholder="Start time"
            name="startTime"
            value={this.state.startTime}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            placeholder="End time"
            name="endTime"
            value={this.state.endTime}
            onChange={this.handleChange}
          />
          <br/>
          <RaisedButton
            label="Save"
            onClick={this.handleSubmit}  primary={true}
          />
        </form>
      );
    } else {
			return(
				<p>Press pause to add a comment</p>
			)
    }
  }
}

export default CaptionForm;
