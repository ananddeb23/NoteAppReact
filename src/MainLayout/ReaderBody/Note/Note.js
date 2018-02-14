import React, { Component } from 'react';

import './Note.css';

// function countChar(val) {
//   console.log('yo');
//   // const len = val.value.length;
// //   if (len === 2) {
// //     val.style.border = '1px solid red';
// //   }
// }
class Note extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            textarealen: '',
        }
        this.handletextlength = this.handletextlength.bind(this);
    }

handletextlength(evt){
    // alert('hi');
    // console.log('hello');
    //this.state.textarealen =7;
    // console.log('hello');
    // const textarealen = this.state.textarealen.slice();

    // this.setState({ textarealen  });
    // this.state.textarealen++;
     if(evt.target.value.length ===3 ){
       evt.target.style.border = '1px solid red';
       evt.target.style.color = 'red';
     }
}
  render() {
    return (
      <div className="NoteBody" >
        <textarea maxLength="3" placeholder="Notes" className="Text" onKeyPress={this.handletextlength} />
      </div>
    );
  }
}

export default Note;
