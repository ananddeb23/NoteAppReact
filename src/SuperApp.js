import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
// import MainLayout from './MainLayout/MainLayout';
import App from './App';


class SuperApp extends Component {
  render() {
    return (
      <div className="SuperApp">
        <BrowserRouter><App /></BrowserRouter>
      </div>
    );
  }
}

export default SuperApp;
