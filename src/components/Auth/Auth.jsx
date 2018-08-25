import React, { Component } from "react";

import { signIn, signOut, listenForAuthChange } from "../../api/auth";
import SignIn from "./SignIn";
import Account from "./Account";

class Auth extends Component {
  state = {
    authenticating: false,
    user: null
  };

  componentDidMount() {
    this.setState(
      {
        authenticating: true
      },
      () => {
        listenForAuthChange(this.handleLogin, this.handleLogout);
      }
    );
  }

  handleLogin = user => {
    console.log("logged in as:", user.displayName);
    this.setState({
      user,
      authenticating: false
    });
  };

  handleLogout = () => {
    this.setState({
      user: null,
      authenticating: false
    });
  };

  render() {
    const content = this.state.user ? (
      <Account
        displayName={this.state.user.displayName}
        handleSignOut={signOut}
      />
    ) : (
      <SignIn handleSignIn={signIn} />
    );

    return (
      <React.Fragment>
        {this.state.authenticating ? <div>LOADING...</div> : content}
      </React.Fragment>
    );
  }
}

export default Auth;
