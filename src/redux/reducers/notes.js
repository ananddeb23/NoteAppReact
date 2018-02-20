
const defaultState = {
  notes: [],
  noteid: 0,
  page: 'addnote',
  notescount: 0,
  defText: '',
  defTitle: '',
  status: '',
};


export default (state = defaultState, action) => {
  switch (action.type) {
    case 'EDIT_NOTE': {
      //   notescount: noteid - 1, page: 'addnote', defText: notetext, defTitle: notetitle
      return {
        ...state, page: 'addnote', notescount: action.payload.noteid - 1, defText: action.payload.notetext, defTitle: action.payload.notetitle,
      };
    }
    case 'SAVE_NOTE': {
      const newnote = state.notes.slice();
      // console.log(notesrecieved.notesid, this.state.notes.length);
      if (action.payload.notesid - 1 < state.notes.length) {
        newnote[action.payload.notesid - 1] = action.payload;
        return {
          ...state, notes: newnote, page: 'shownote', notescount: state.notes.length, defText: '', defTitle: '',
        };
      }
      newnote.push(action.payload);
      return {
        ...state, notes: newnote, page: 'shownote', notescount: state.notes.length + 1, defText: '', defTitle: '',
      };
    }
    case 'TOGGLE_PAGE': {
      return { ...state, page: 'addnote' };
    }
    case 'SYNC_ACTION': {
    //   const payload = state.notes;
    //   const data = new FormData();
    //   data.append('payload', JSON.stringify(payload));

    //   fetch(
    //     requestUrladdbyId,
    //     {
    //       method: 'POST',
    //       body: JSON.stringify(payload),
    //     },
    //   ).then((response) => {
    //     // alert(response.data);
    //     response.text().then((msg) => {
    //       // console.log(msg);

    //       alert(msg);
    //       return { ...state, status: msg };
    //     });


    //     // console.log(text);
    //   });
      return { ...state, page: action.payload , status: 'last sync successful' };
    }
    case 'GET_NOTES': {
      console.log(action.payload);
      return { ...state, notes: action.payload, notescount: action.payload.length };
      // return state;
    }
    default: {
      return state;
    }
  }
};
