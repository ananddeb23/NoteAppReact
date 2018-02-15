import React, { Component } from 'react';

import './Userinstruction.css';


class Userinstruction extends Component {
  render() {
    return (
      <div className="Information" >
        <i> {this.props.informationtext} </i>
        <i className={this.props.informationicon} />
      </div>
    );
  }
}

export default Userinstruction;
