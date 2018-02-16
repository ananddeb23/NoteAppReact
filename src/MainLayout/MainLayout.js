import React, { Component } from 'react';

import './MainLayout.css';
import Header from './Header/Header';
import ReaderBody from './ReaderBody/ReaderBody';
import Footer from './Footer/Footer';
import SavedNotesBody from './SavedNotesBody/SavedNotesBody';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'addnote',
      notes: [],
    };
    this.handlenotes = this.handlenotes.bind(this);
    this.togglePage = this.togglePage.bind(this);
  }
  handlenotes(notesrecieved) {
    // alert(notesrecieved);
    const newnote = this.state.notes.slice();
    newnote.push(notesrecieved[0]);
    this.setState({ notes: newnote, page: 'shownote' });
  }
  togglePage() {
    this.setState({ page: 'addnote' });
  }
  render() {
    // console.log('final', this.state.notes);
    if (this.state.page === 'addnote') {
      return (
        <div className="OuterLayout" >
          <Header headertext="Start taking notes" />
          <ReaderBody allowedcharlimit={300} sendBackNotes={this.handlenotes} />
          <Footer footertext="About Us" />
        </div>
      );
    }


    return (
      <div className="Saved Notes" >
        <Header headertext="Start taking notes" />
        <SavedNotesBody notes={this.state.notes} actionNewNote={this.togglePage} />
        <Footer footertext="Create new Note" clickaction={this.togglePage} />
      </div>
    );
  }
}

export default MainLayout;
