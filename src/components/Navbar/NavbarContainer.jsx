import React from "react";

import { AuthConsumer } from "../../contexts/AuthContext";
import Account from "./Account";
import Loading from "./Loading";
import SignIn from "./SignIn";

const NavbarContainer = () => (
  <AuthConsumer>
    {({ user, authenticating, login, logout }) => {
      if (authenticating) {
        return <Loading />;
      } else if (user) {
        return <Account displayName={user.displayName} handleLogout={logout} />;
      }
      return <SignIn handleLogin={login} />;
    }}
  </AuthConsumer>
);

export default NavbarContainer;
