import React, { Component } from 'react';

import './MainLayout.css';
import Header from './Header/Header';
import ReaderBody from './ReaderBody/ReaderBody';
import Footer from './Footer/Footer';

class MainLayout extends Component {
  render() {
    return (
      <div className="OuterLayout" >
        <Header headertext="Start taking notes" />
        <ReaderBody allowedcharlimit={10} />
        <Footer footertext="About Us" />
      </div>
    );
  }
}

export default MainLayout;
