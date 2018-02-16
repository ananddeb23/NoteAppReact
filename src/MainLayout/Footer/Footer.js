import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="FooterLayout" onClick={this.props.clickaction}>
        <center> {this.props.footertext} </center>

      </div>
    );
  }
}

export default Footer;
