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
      notescount: 0,
      defText: '',
      defTitle: '',

    };
    this.handlenotes = this.handlenotes.bind(this);
    this.togglePage = this.togglePage.bind(this);
    this.triggerEdit = this.triggerEdit.bind(this);
  }
  triggerEdit(noteid, notetext, notetitle) {
    console.log('noteid', noteid);
    this.setState({
      notescount: noteid - 1, page: 'addnote', defText: notetext, defTitle: notetitle,
    });
  }

  handlenotes(notesrecieved) {
    // alert(notesrecieved);
    const newnote = this.state.notes.slice();
    console.log(notesrecieved.notesid, this.state.notes.length);
    if (notesrecieved.notesid - 1 < this.state.notes.length) {
      newnote[notesrecieved.notesid - 1] = notesrecieved;
    } else {
      newnote.push(notesrecieved);
    }
    this.setState({
      notes: newnote, page: 'shownote', notescount: this.state.notes.length + 1, defText: '', defTitle: '',
    });


    console.log('Im here');
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
          <ReaderBody allowedcharlimit={300} sendBackNotes={this.handlenotes} notescount={this.state.notescount} noteText={this.state.defText} noteTitle={this.state.defTitle} />
          <Footer footertext="About Us" />
        </div>
      );
    }
    return (
      <div className="Saved Notes" >
        <Header headertext="Start taking notes" />
        <SavedNotesBody notes={this.state.notes} actionNewNote={this.togglePage} triggerEdit={this.triggerEdit} />
        <Footer footertext="Create new Note" clickaction={this.togglePage} />
      </div>
    );


    // return (
    //     <div className="OuterLayout" >
    //       <Header headertext="Start taking notes" />
    //       <ReaderBody allowedcharlimit={300} sendBackNotes={this.handlenotes} idToEdit={this.state.nextid} noteText={this.state.notes[nextid - 1]} />
    //       <Footer footertext="About Us" />
    //     </div>
    // );
  }
}

export default MainLayout;
