import React, { Component } from 'react';

import './Save.css';


class Save extends Component {
  render() {
    return (
      <div className="Save" >
        <span> <a href="#"> <strong>Save </strong></a></span>
        <span>  <small> 150 characters</small>
           </span>
      </div>
    );
  }
}

export default Save;
