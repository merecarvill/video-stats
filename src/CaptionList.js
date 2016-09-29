import { bindAll } from 'class-bind';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import React, { Component } from 'react';

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
              <TableRowColumn>{this.formatCaptionTime(caption.startTime)}</TableRowColumn>
              <TableRowColumn>{`${caption.duration}s`}</TableRowColumn>
            </TableRow>
          )
        }
      )
    );
  }

  formatCaptionTime(startSeconds) {
    const minutes = Math.floor((startSeconds / 60) % 60);
    const seconds = Math.floor(startSeconds % 60);

    return seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
  }

  render() {
    return(
      <Table
        onRowSelection={this.props.onRowSelection}
      >
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
