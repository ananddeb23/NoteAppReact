import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="HeaderLayout" >
        <center> {this.props.headertext} </center>
      </div>
    );
  }
}

export default Header;
