import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notearea.css';


class Notearea extends Component {
  constructor(props) {
    super(props);
  }


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

Notearea.propTypes = {
  limit: PropTypes.number,
  noteplaceholder: PropTypes.string,
  textareastyle: PropTypes.string,
  charactershandler: PropTypes.string,
  notetext: PropTypes.string,
};
Notearea.defaultProps = {
  limit: 120,
  noteplaceholder: 'Notes',
  textareastyle: 'black',
  charactershandler: '',
  notetext: '',
};

export default Notearea;
