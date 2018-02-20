import React, { Component } from 'react';

import './MainLayout.css';
import Header from './Header/Header';
import ReaderBody from './ReaderBody/ReaderBody';
import Footer from './Footer/Footer';
import SavedNotesBody from './SavedNotesBody/SavedNotesBody';
import { connect } from 'react-redux';
import { getNotes } from '../redux/actions';

const urltoreq = '/getNotes';
class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: this.props.page,
      // notes: [],
      // notescount: 0,
      // defText: '',
      // defTitle: '',

    };

    // this.handlenotes = this.handlenotes.bind(this);
    // this.togglePage = this.togglePage.bind(this);
    // this.triggerEdit = this.triggerEdit.bind(this);
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
  // triggerEdit(noteid, notetext, notetitle) {
  //   console.log('noteid', noteid);
  //   this.setState({
  //     notescount: noteid - 1, page: 'addnote', defText: notetext, defTitle: notetitle,
  //   });
  // }

  // handlenotes(notesrecieved) {
  //   // alert(notesrecieved);
  //   const newnote = this.state.notes.slice();
  //   console.log(notesrecieved.notesid, this.state.notes.length);
  //   if (notesrecieved.notesid - 1 < this.state.notes.length) {
  //     newnote[notesrecieved.notesid - 1] = notesrecieved;
  //   } else {
  //     newnote.push(notesrecieved);
  //   }
  //   this.setState({
  //     notes: newnote, page: 'shownote', notescount: this.state.notes.length + 1, defText: '', defTitle: '',
  //   });


  //   console.log('Im here');
  // }
  // togglePage() {
  //   this.setState({ page: 'addnote' });
  // }
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
export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
