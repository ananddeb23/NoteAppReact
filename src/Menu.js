import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div className="Menu">
        <center> <h1> Note-Taker </h1> </center>
        <div className="MenuOuter">

          <button className="MenuButton">
            <Link to="/add" > New Note</Link>
          </button>
          <button className="MenuButton">
            <Link to="/saved" > Saved Notes</Link>
          </button>

        </div>
      </div>);
  }
}
Menu.defaultProps = {
};
Menu.propTypes = {
};
export default Menu;
