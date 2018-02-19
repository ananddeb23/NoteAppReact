import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NoteArea.css';


class NoteArea extends Component {
  // constructor(props) {
  //   super(props);
  // }


  render() {
    return (
      <div className="NoteBody" >
        <textarea
          maxLength={this.props.limit}
          placeholder={this.props.noteplaceholder}
          className={this.props.textareastyle}
          onChange={this.props.charactershandler}
          value={this.props.notetext}
        />
      </div>
    );
  }
}

NoteArea.propTypes = {
  limit: PropTypes.number,
  noteplaceholder: PropTypes.string,
  textareastyle: PropTypes.string,
  charactershandler: PropTypes.func,
  notetext: PropTypes.string,
};
NoteArea.defaultProps = {
  limit: 120,
  noteplaceholder: 'Notes',
  textareastyle: 'black',
  charactershandler: '',
  notetext: '',
};

export default NoteArea;
