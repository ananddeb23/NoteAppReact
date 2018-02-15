import React, { Component } from 'react';

import './ReaderBody.css';
import Notestitlebar from './Notestitlebar/Notestitlebar';
import Tasks from './Tasks/Tasks';
import Userinstruction from './Userinstruction/Userinstruction';
import Notearea from './Notearea/Notearea';
import Actioninfobar from './Actioninfobar/Actioninfobar';

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
    console.log(this.state.notes);
    const obj = {
      title: this.state.currenttitle,
      note: this.state.currenttext,
    };
    const notesnew = this.state.notes.slice();
    notesnew.push(obj);
    this.setState({ notes: notesnew });
    this.setState({ currenttext: '' });
    this.setState({ currenttitle: '' });
  }
  render() {
    return (
      <div className="BodyLayout" >
        <Notestitlebar notetitle="Note Title" buttontext="En" />
        <Tasks tasksplaceholder="Tasks for today" notetitle={this.state.currenttitle} titlemethod={this.updatetitlecontent} />
        <Userinstruction informationtext="Please type your note below" informationicon="fas fa-align-center" />
        <Notearea noteplaceholder="Notes" textareastyle={this.state.textareaclass} limit={this.state.charactersallowed} charactershandler={this.charactercounter} notetext={this.state.currenttext} handletextlength={this.handletextlength} />
        <Actioninfobar actiontype="Save" charactercount={this.state.charactercount} charactersleft={this.state.charactersleft} actionmethod={this.updatenotes} />
      </div>
    );
  }
}

export default ReaderBody;
