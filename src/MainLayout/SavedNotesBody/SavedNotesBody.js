import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SavedNotesBody.css';
import ContentCase from './ContentCase/ContentCase';

class SavedNotesBody extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const displaynotes = [];


    for (let i = 0; i < this.props.notes.length; i += 1) {
      console.log('props', this.props.notes[i].notesid);
      const frame1 = <ContentCase contentToDisplay={this.props.notes[i]} key={this.props.notes[i].notesid} triggerEdit={this.props.triggerEdit} />;
      // console.log(this.props.notes[i].title, this.props.notes[i].note);
      displaynotes.push(frame1);
    }
    return (

      <div className="SavedNotesBody-structure" >
        {displaynotes}

      </div>

    );
  }
}

SavedNotesBody.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string,
    note: PropTypes.string,
  }))).isRequired,
};


export default SavedNotesBody;
