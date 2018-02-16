import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NotesTitleBar.css';


class NotesTitleBar extends Component {
  render() {
    return (
      <div className="Title" >
        <h5> {this.props.notetitle} </h5>
        <button> <strong> {this.props.buttontext} </strong></button>
      </div>
    );
  }
}
NotesTitleBar.propTypes = {
  notetitle: PropTypes.string,
  buttontext: PropTypes.string,

};
NotesTitleBar.defaultProps = {
  notetitle: '',
  buttontext: '',
};

export default NotesTitleBar;
