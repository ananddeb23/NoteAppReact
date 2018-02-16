import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Tasks.css';


class Tasks extends Component {
  render() {
    return (
      <div className="Tasks" >
        <input type="text" placeholder={this.props.tasksplaceholder} className="Text" onChange={this.props.titlemethod} value={this.props.notetitle} />
      </div>
    );
  }
}

Tasks.propTypes = {
  tasksplaceholder: PropTypes.string,
  titlemethod: PropTypes.func,
  notetitle: PropTypes.string,


};
Tasks.defaultProps = {
  tasksplaceholder: '',
  titlemethod: '',
  notetitle: '',
};

export default Tasks;
