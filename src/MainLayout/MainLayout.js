import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getNotes } from '../redux/actions';
import './MainLayout.css';
import Header from './Header/Header';
import ReaderBody from './ReaderBody/ReaderBody';
import Footer from './Footer/Footer';
import SavedNotesBody from './SavedNotesBody/SavedNotesBody';


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
    if (this.props.page === 'addnote') {
      return (
        <div className="OuterLayout" >
          <Header headertext="Start taking notes" />
          <ReaderBody allowedcharlimit={300} />
          <Footer footertext="About Us" />
        </div>
      );
    }
    return (
      <div className="Saved Notes" >
        <Header headertext="Start taking notes" />
        <SavedNotesBody />
        <Footer footertext="Create new Note" />
      </div>
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
  page: PropTypes.string.isRequired,
  getNotes: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
