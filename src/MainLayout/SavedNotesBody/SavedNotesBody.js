import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SavedNotesBody.css';
import ContentCase from './ContentCase/ContentCase';
import { connect } from 'react-redux';

class SavedNotesBody extends Component {
  render() {
    const displaynotes = [];


    for (let i = 0; i < this.props.notes.length; i += 1) {
      console.log('props', this.props.notes[i].notesid);
      const frame1 = <ContentCase contentToDisplay={this.props.notes[i]} key={this.props.notes[i].notesid} />;
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

const mapStateToProps = state => ({
  notes: state.notes.notes,


});
export default connect(mapStateToProps, null)(SavedNotesBody);
