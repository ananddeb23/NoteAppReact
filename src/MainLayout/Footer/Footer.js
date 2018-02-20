import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { togglePage } from '../../redux/actions';

import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div className="FooterLayout" onClick={this.props.togglePage}>
        <center> {this.props.footertext} </center>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  togglePage: () => dispatch(togglePage()),

});

Footer.propTypes = {
  footertext: PropTypes.string.isRequired,
  togglePage: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Footer);
