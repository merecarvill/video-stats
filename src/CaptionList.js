import { bindAll } from 'class-bind';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

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
              <TableRowColumn>{`${caption.visibility}`}</TableRowColumn>
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
      <Paper zDepth={2}>
        <Table onRowSelection={this.props.onRowSelection}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Caption</TableHeaderColumn>
              <TableHeaderColumn>Start Time</TableHeaderColumn>
              <TableHeaderColumn>Duration</TableHeaderColumn>
              <TableHeaderColumn>Visibility</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} stripedRows={true}>
            {this.renderRows()}
          </TableBody>
        </Table>
      </Paper>
    );
  }

}


export default CaptionList;
