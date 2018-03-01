import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import ReaderBody from './ReaderBody/ReaderBody';
import Footer from './Footer/Footer';

class AddNote extends React.Component {
  render() {
    return (
      <div className="OuterLayout" >
        <Header headertext="Start taking notes" />
        <ReaderBody allowedcharlimit={300} />
        <Footer footertext="About Us" />
      </div>
    );
  }
}
AddNote.defaultProps = {
};
AddNote.propTypes = {
};
export default AddNote;
