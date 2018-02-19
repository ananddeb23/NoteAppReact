import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ReaderBody.css';
import NotesTitleBar from './NotesTitleBar/NotesTitleBar';
import Tasks from './Tasks/Tasks';
import UserInstruction from './UserInstruction/UserInstruction';
import NoteArea from './NoteArea/NoteArea';
import ActionInfoBar from './ActionInfoBar/ActionInfoBar';

class ReaderBody extends Component {
  constructor(props) {
    super(props);
    console.log('CONSTRUCTING');
  }
  state = {
    charactercount: 0,
    charactersleft: this.props.allowedcharlimit,
    charactersallowed: this.props.allowedcharlimit,
    notes: {},
    currenttext: this.props.noteText,
    currenttitle: this.props.noteTitle,
    textareaclass: 'black',
    savewasclicked: 'no',
    notescounter: this.props.notescount,
  };
  updatetitlecontent = (evt) => {
    const titlenew = evt.target.value;
    this.setState({ currenttitle: titlenew });
  }
  handletextlength= (evt) => {
    if (evt.target.value.length === this.state.charactersallowed) {
      // evt.target.style.border = '1px solid red';
      // evt.target.style.color = 'red';
      this.setState({ textareaclass: 'red' });
    } else {
      this.setState({ textareaclass: 'black' });
    }
  }
  charactercounter = (evt) => {
    this.handletextlength(evt);
    const charactersleftnew = this.state.charactersallowed - evt.target.value.length;
    const charactercountnew = evt.target.value.length;
    const textnew = evt.target.value;
    this.setState({ currenttext: textnew });
    this.setState({ charactercount: charactercountnew, charactersleft: charactersleftnew });
  }
  updatenotes= () => {
    // console.log(this.state.notes);
    let newnotescount = this.state.notescounter;
    newnotescount += 1;
    const obj = {
      title: this.state.currenttitle,
      note: this.state.currenttext,
      notesid: newnotescount,
    };
    // const notesnew = [...this.state.notes, obj];
    const notesnew = obj;
    this.setState({
      notes: notesnew, currenttext: '', currenttitle: '', savewasclicked: 'yes', notescounter: newnotescount,
    }, () => {
      console.log(this.state);
    });
  }
  render() {
    if (this.state.savewasclicked === 'yes') {
      this.props.sendBackNotes(this.state.notes);
    }
    return (
      <div className="BodyLayout" >
        <NotesTitleBar notetitle="Note Title" buttontext="En" />
        <Tasks tasksplaceholder="Tasks for today" notetitle={this.state.currenttitle} titlemethod={this.updatetitlecontent} />
        <UserInstruction informationtext="Please type your note below" informationicon="fas fa-align-center" />
        <NoteArea
          noteplaceholder="Notes"
          textareastyle={this.state.textareaclass}
          limit={this.state.charactersallowed}
          charactershandler={this.charactercounter}
          notetext={this.state.currenttext}
          handletextlength={this.handletextlength}

        />
        <ActionInfoBar actiontype="Save" charactercount={this.state.charactercount} charactersleft={this.state.charactersleft} actionmethod={this.updatenotes} />
      </div>
    );
  }
}


ReaderBody.propTypes = {
  sendBackNotes: PropTypes.func,
  noteText: PropTypes.string.isRequired,
  noteTitle: PropTypes.string.isRequired,
  allowedcharlimit: PropTypes.string.isRequired,
  notescount: PropTypes.string.isRequired,


};
ReaderBody.defaultProps = {
  sendBackNotes: '',

};
export default ReaderBody;
