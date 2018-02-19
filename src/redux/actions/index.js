const EDIT_NOTE = 'EDIT_NOTE';
const SAVE_NOTE = 'SAVE_NOTE';
const TOGGLE_PAGE = 'TOGGLE_PAGE';

export const editNote = payload => ({
  type: EDIT_NOTE,
  payload,
});

export const saveNote = payload => ({
  type: SAVE_NOTE,
  payload,
});

export const togglePage = () => ({
  type: TOGGLE_PAGE,

});
