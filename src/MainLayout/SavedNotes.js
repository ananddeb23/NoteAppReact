import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SavedNotesBody from './SavedNotesBody/SavedNotesBody';

class SavedNotes extends React.Component {
  render() {
    return (
      <div className="Saved Notes" >
        <Header headertext="Start taking notes" />
        <SavedNotesBody />
        <Footer footertext="Create new Note" />
      </div>
    );
  }
}
SavedNotes.defaultProps = {
};
SavedNotes.propTypes = {
};
export default SavedNotes;
