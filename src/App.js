import React, { Component } from "react";
import Auth from "./components/Auth";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
        <h1>Find a partner to create something with</h1>
        {/* <ProfilesList /> */}
        {/* <EventBanner /> */}
      </div>
    );
  }
}

export default App;
