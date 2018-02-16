import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './UserInstruction.css';


class UserInstruction extends Component {
  render() {
    return (
      <div className="Information" >
        <i> {this.props.informationtext} </i>
        <i className={this.props.informationicon} />
      </div>
    );
  }
}

UserInstruction.propTypes = {
  informationicon: PropTypes.string,
  informationtext: PropTypes.string,


};
UserInstruction.defaultProps = {
  informationicon: '',
  informationtext: '',
};

export default UserInstruction;
