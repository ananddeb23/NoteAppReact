import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ActionInfoBar.css';


class ActionInfoBar extends Component {
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

ActionInfoBar.propTypes = {
  actionmethod: PropTypes.func,
  actiontype: PropTypes.func,
  charactersleft: PropTypes.number,

};
ActionInfoBar.defaultProps = {
  actionmethod: '',
  actiontype: '',
  charactersleft: 0,
};
export default ActionInfoBar;
