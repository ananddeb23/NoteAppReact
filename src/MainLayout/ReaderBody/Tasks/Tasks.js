import React, { Component } from 'react';

import './Tasks.css';


class Title extends Component {
  render() {
    return (
      <div className="Tasks" >
        <input type="text" placeholder={this.props.tasksplaceholder} className="Text" onChange={this.props.titlemethod} value={this.props.notetitle} />
      </div>
    );
  }
}

export default Title;
