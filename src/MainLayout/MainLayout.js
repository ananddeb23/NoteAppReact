import React, { Component } from 'react';

import './MainLayout.css';
import Header from './Header/Header';
import ReaderBody from './ReaderBody/ReaderBody';
import Footer from './Footer/Footer';

class MainLayout extends Component {
  render() {
    return (
      <div className="OuterLayout" >
        <Header />
        <ReaderBody />
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
