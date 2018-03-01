import React, { Component } from 'react';
// import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
// import Navbar from './MainLayout/Navbar';
import AddNote from './MainLayout/AddNote';
import SavedNotes from './MainLayout/SavedNotes';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route path="/add" component={AddNote} />
          <Route path="/saved" component={SavedNotes} />
        </Switch>
        <MainLayout />
      </div>
    );
  }
}

export default App;
