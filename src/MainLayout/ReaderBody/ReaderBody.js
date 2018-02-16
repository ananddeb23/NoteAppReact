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
    this.state = {
      charactercount: 0,
      charactersleft: props.allowedcharlimit,
      charactersallowed: props.allowedcharlimit,
      notes: [],
      currenttext: '',
      currenttitle: '',
      textareaclass: 'black',
      savewasclicked: 'no',
    };
    this.charactercounter = this.charactercounter.bind(this);
    this.updatetitlecontent = this.updatetitlecontent.bind(this);
    this.updatenotes = this.updatenotes.bind(this);
    this.handletextlength = this.handletextlength.bind(this);
  }
  updatetitlecontent(evt) {
    const titlenew = evt.target.value;
    this.setState({ currenttitle: titlenew });
  }
  handletextlength(evt) {
    if (evt.target.value.length === this.state.charactersallowed) {
      // evt.target.style.border = '1px solid red';
      // evt.target.style.color = 'red';
      this.setState({ textareaclass: 'red' });
    } else {
      this.setState({ textareaclass: 'black' });
    }
  }
  charactercounter(evt) {
    this.handletextlength(evt);
    const charactersleftnew = this.state.charactersallowed - evt.target.value.length;
    const charactercountnew = evt.target.value.length;
    const textnew = evt.target.value;
    this.setState({ currenttext: textnew });
    this.setState({ charactercount: charactercountnew, charactersleft: charactersleftnew });
  }
  updatenotes() {
    // console.log(this.state.notes);

    const obj = {
      title: this.state.currenttitle,
      note: this.state.currenttext,
    };
    const notesnew = this.state.notes.slice();
    notesnew.push(obj);
    this.setState({
      notes: notesnew, currenttext: '', currenttitle: '', savewasclicked: 'yes',
    });
  }
  render() {
    if (this.state.savewasclicked === 'yes') {
      this.props.sendBackNotes(this.state.notes);
    }
    console.log(this.state.notes);
    return (
      <div className="BodyLayout" >
        <NotesTitleBar notetitle="Note Title" buttontext="En" />
        <Tasks tasksplaceholder="Tasks for today" notetitle={this.state.currenttitle} titlemethod={this.updatetitlecontent} />
        <UserInstruction informationtext="Please type your note below" informationicon="fas fa-align-center" />
        <NoteArea noteplaceholder="Notes" textareastyle={this.state.textareaclass} limit={this.state.charactersallowed} charactershandler={this.charactercounter} notetext={this.state.currenttext} handletextlength={this.handletextlength} />
        <ActionInfoBar actiontype="Save" charactercount={this.state.charactercount} charactersleft={this.state.charactersleft} actionmethod={this.updatenotes} />
      </div>
    );
  }
}


ReaderBody.propTypes = {
  sendBackNotes: PropTypes.func,


};
ReaderBody.defaultProps = {
  sendBackNotes: '',

};
export default ReaderBody;
