import React, { Component } from 'react';

import './ReaderBody.css';
import Title from './Title/Title';
import Tasks from './Tasks/Tasks';
import Information from './Information/Information';
import Note from './Note/Note';
import Save from './Save/Save';

class ReaderBody extends Component {
  render() {
    return (
      <div className="BodyLayout" >
        <Title />
        <Tasks />
        <Information />
        <Note />
        <Save />
      </div>
    );
  }
}

export default ReaderBody;
