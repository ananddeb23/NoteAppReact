import React, { Component } from 'react';

import './Tasks.css';


class Title extends Component {
  render() {
    return (
      <div className="Tasks" >
        <input type="text" placeholder="  Tasks for today" className="Text" />
      </div>
    );
  }
}

export default Title;
