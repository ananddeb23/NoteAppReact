import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContentCase.css';


class ContentCase extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {s

//     };s
//   }
  render() {
    return (
      <div className="ContentCase-outer">

        <div>  <h3 className="ContentCase-title"> {this.props.contentToDisplay.title} </h3></div>
        <br />
        <br />
        <p className="ContentCase-body">  {this.props.contentToDisplay.note} </p>

      </div>

    );
  }
}


ContentCase.propTypes = {
  contentToDisplay: PropTypes.objectOf(PropTypes.shape({
    title: PropTypes.string,
    note: PropTypes.string,
  })).isRequired,


};
// ContentCase.defaultProps = {
//   contentToDisplay: [],

// };
export default ContentCase;
