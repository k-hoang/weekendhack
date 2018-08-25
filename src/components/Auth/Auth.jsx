import React, { Component } from "react";
import styled from "styled-components";

import { signIn, signOut, listenForAuthChange } from "../../api/auth";
import Ribbon from "../Ribbon";
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
    // TODO: consider performance overhead here
    const content = this.state.user ? (
      <Account
        displayName={this.state.user.displayName}
        handleSignOut={signOut}
        render={props => <StyledRibbon {...props} />}
      />
    ) : (
      <SignIn
        handleSignIn={signIn}
        render={props => <StyledRibbon {...props} />}
      />
    );

    return (
      <React.Fragment>
        {this.state.authenticating ? (
          <StyledRibbon middleItems={<div>Loading...</div>} />
        ) : (
          content
        )}
      </React.Fragment>
    );
  }
}

const StyledRibbon = styled(Ribbon)`
  height: 4rem;
  background: purple;
`;

export default Auth;
