import React, { Component } from 'react';

import './Actioninfobar.css';


class Actioninfobar extends Component {
  render() {
    return (
      <div className="Save" >
        <span> <a href="#" className="actiontype" onClick={this.props.actionmethod}> <strong>{this.props.actiontype} </strong></a></span>
        <span>  <small> {this.props.charactersleft} characters</small>
        </span>
      </div>
    );
  }
}

export default Actioninfobar;
