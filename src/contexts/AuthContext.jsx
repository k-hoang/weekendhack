import React, { Component, createContext } from "react";

import * as authApi from "../api/auth";
import * as messagingApi from "../api/messaging";

const AuthContext = createContext("auth");

export class AuthProvider extends Component {
  componentDidMount() {
    authApi.listenForAuthChange(this.onLogin, this.onLogout);
  }

  onLogin = user => {
    messagingApi.listenForMessages(user.userId, this.onNewMessage);
    this.setState({
      user,
      authenticating: false
    });
  };

  onLogout = () => {
    this.setState({
      user: null,
      authenticating: false
    });
  };

  onNewMessage = message => {
    console.log("new message:", message);
  };

  state = {
    authenticating: true,
    user: null,
    login: authApi.signIn,
    logout: authApi.signOut
  };

  render() {
    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const AuthConsumer = ({ children }) => (
  <AuthContext.Consumer>{children}</AuthContext.Consumer>
);
