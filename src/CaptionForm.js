import { bindAll } from 'class-bind';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import ActionVisibility from 'material-ui/svg-icons/action/visibility';
import ActionVisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


import Storage from "./storage.js";

injectTapEventPlugin();

class CaptionForm extends Component {
  constructor(props) {
    super(props);
    bindAll(CaptionForm.prototype);

    this.state = {
      caption: "",
      startTime: "",
      duration: 5,
      visibility: "private"

    };
    this.storage = new Storage();
    this.storage.clear();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ startTime: nextProps.startTime });
  }

  valid() {
    const { caption, startTime, duration } = this.state;
    return caption && startTime && duration &&
           this.isNumeric(startTime) && this.isNumeric(duration);
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  saveCaption() {
    const currentCaptions = this.storage.get("captions") || [];
    this.storage.set("captions", currentCaptions.concat(this.state));
    this.setState({ caption: "", visibility: "private" });
    this.props.onSaveCaption(this.state);
  }

  handleInputChange(e) {
    const change = {};
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    change[fieldName] = fieldValue;
    this.setState(change);
  }

  render() {
    if (this.props.visible) {
      return(
        <Paper zDepth={2}>
          <form className="captionForm">
            <TextField
              floatingLabelText="Enter caption"
              hintText="Caption text"
              name="caption"
              value={this.state.caption}
              onChange={this.handleInputChange}
            />
            <br/>
            <TextField
              floatingLabelText="Duration (seconds)"
              name="duration"
              hintText="5"
              value={this.state.duration}
              onChange={this.handleInputChange}
            />
            <br/>
            <br/>
            <RadioButtonGroup name="visibility" defaultSelected="private">
              <RadioButton
                value="private"
                label="Private"
                style={{ display: 'inline-block', width: '150px' }}
                checkedIcon={<ActionVisibilityOff />}
                onClick={this.handleInputChange}
              />
              <RadioButton
                value="public"
                label="Public"
                style={{ display: 'inline-block', width: '150px' }}
                checkedIcon={<ActionVisibility />}
                onClick={this.handleInputChange}
              />
            </RadioButtonGroup>
            <RaisedButton
              label="Save"
              onClick={this.saveCaption} primary={true}
              style={{ margin: 20}}
              disabled={!this.valid()}
            />
          </form>
        </Paper>
      );
    } else {
      return(
        <RaisedButton
          label="Add caption"
          onClick={this.props.onStartCaption} 
          primary={true}
        />
      )
    }
  }
}

export default CaptionForm;
