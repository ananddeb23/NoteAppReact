import React, { Component } from 'react';

import './Notestitlebar.css';


class Notestitlebar extends Component {
  render() {
    return (
      <div className="Title" >
        <h5> {this.props.notetitle} </h5>
        <button> <strong> {this.props.buttontext} </strong></button>
      </div>
    );
  }
}

export default Notestitlebar;
