import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Storage from "./storage.js";

injectTapEventPlugin();

class CaptionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      caption: "",
      startTime: "",
      duration: 5
    };
    this.storage = new Storage();
    this.storage.clear();

    this.saveCaption = this.saveCaption.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({startTime: nextProps.startTime});
  }

  saveCaption() {
    const currentCaptions = this.storage.get("captions") || [];
    this.storage.set("captions", currentCaptions.concat(this.state));
    this.setState({ caption: "" });
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
        <form className="captionForm">
          <TextField
            placeholder="Enter caption"
            name="caption"
            value={this.state.caption}
            onChange={this.handleInputChange}
          />
          <br/>
          <TextField
            placeholder="Start time"
            name="startTime"
            value={this.state.startTime}
            onChange={this.handleInputChange}
          />
          <br/>
          <TextField
            placeholder="Duration"
            name="duration"
            value={this.state.duration}
            onChange={this.handleInputChange}
          />
          <br/>
          <RaisedButton
            label="Save"
            onClick={this.saveCaption} primary={true}
          />
        </form>
      );
    } else {
			return(
        <RaisedButton
          label="Add caption"
          onClick={this.props.onStartCaption} primary={true}
        />
			)
    }
  }
}

export default CaptionForm;
