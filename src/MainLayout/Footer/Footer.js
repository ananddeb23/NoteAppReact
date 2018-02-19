import React, { Component } from 'react';
import { connect } from 'react-redux';
import { togglePage } from '../../redux/actions';
import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
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

export default connect(null, mapDispatchToProps)(Footer);
