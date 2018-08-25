import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Find a partner to create something with</h1>
        <ProfilesList />
        <EventBanner />
      </div>
    );
  }
}

export default App;
