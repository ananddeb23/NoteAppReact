import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNotes } from '../redux/actions';


import './MainLayout.css';
import AddNote from './AddNote';
import SavedNotes from './SavedNotes';


const urltoreq = '/getNotes';
class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // page: this.props.page,


    };
  }
  componentDidMount() {
    // this.props.getNotes();
    fetch(urltoreq)
      .then((response) => {
        response.text().then((notes) => {
          console.log(JSON.parse(notes));
          const notesparsed = JSON.parse(notes);
          this.props.getNotes(notesparsed);
        });
      });
  }
  render() {
    return (
      <div className="MainLayout" />
    );
  }
}
const mapStateToProps = state => ({
  page: state.notes.page,

});

const mapDispatchToProps = dispatch => ({
  getNotes: notes => dispatch(getNotes(notes)),

});
MainLayout.propTypes = {

  getNotes: PropTypes.func.isRequired,
};
export default (connect(mapStateToProps, mapDispatchToProps)(MainLayout));
