import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContentCase.css';
import { editNote } from '../../../redux/actions';
import { connect } from 'react-redux';

class ContentCase extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="ContentCase-outer">

        <div>  <h3 className="ContentCase-title"> {this.props.contentToDisplay.title} </h3></div>
        <br />
        <br />
        <div
          className="ContentCase-body"
          onClick={() => { this.props.editNote(this.props.contentToDisplay.notesid, this.props.contentToDisplay.note, this.props.contentToDisplay.title); }}
        >  {this.props.contentToDisplay.note}
        </div>

      </div>

    );
  }
}


ContentCase.propTypes = {
  contentToDisplay: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string,
    note: PropTypes.string,
  })).isRequired,
  notesid: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
// ContentCase.defaultProps = {
//   contentToDisplay: [],

// };
const mapDispatchToState = dispatch => ({
  editNote: (noteid, note, notetitle) => {
    const obj = {
      noteid,
      notetext: note,
      notetitle,
    };
    dispatch(editNote(obj));
  },

});
export default connect(null, mapDispatchToState)(ContentCase);
