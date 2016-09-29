import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import { bindAll } from 'class-bind';

class CaptionList extends Component {
  constructor(props) {
    super(props);
    bindAll(CaptionList.prototype);
  }

  renderRows() {
    return(
      this.props.captions.map(
        (caption, index) => {
          return(
            <TableRow key={index}>
              <TableRowColumn>{caption.caption}</TableRowColumn>
              <TableRowColumn>{caption.startTime}</TableRowColumn>
              <TableRowColumn>{caption.duration}</TableRowColumn>
            </TableRow>
          )
        }
      )
    );
  }

  render() {
    return(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Caption</TableHeaderColumn>
            <TableHeaderColumn>Start Time</TableHeaderColumn>
            <TableHeaderColumn>Duration</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.renderRows()}
        </TableBody>
      </Table>
    );
  }
}

export default CaptionList;
