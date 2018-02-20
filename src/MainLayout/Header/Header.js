import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { syncAction } from '../../redux/actions';
import './Header.css';

const requestUrladdbyId = '/syncNotes';
class Header extends Component {
  state = {

  }
   handlesync = () => {
     const payload = this.props.notes;
     const data = new FormData();
     data.append('payload', JSON.stringify(payload));

     fetch(
       requestUrladdbyId,
       {
         method: 'POST',
         body: JSON.stringify(payload),
       },
     ).then((response) => {
       response.text().then((msg) => {
         alert(msg);
         this.props.syncNotes(msg);
       });
     });
   }
   render() {
     return (
       <div className="HeaderLayout" >
         <center> {this.props.headertext} </center>
         {this.props.page === 'shownote' ? <button onClick={this.handlesync}> SYNC </button> : null}

         {this.props.status}
       </div>
     );
   }
}
const mapDispatchToProps = dispatch => ({
  syncNotes: msg => dispatch(syncAction(msg)),

});
const mapStateToProps = state => ({
  page: state.notes.page,
  status: state.notes.status,
  notes: state.notes.notes,
});

Header.propTypes = {
  headertext: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  syncNotes: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
