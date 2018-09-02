import React from "react";

import Navbar from "../Navbar";

const SignIn = ({ handleSignIn }) => (
  <Navbar
    rightItems={<button onClick={handleSignIn}>sign-in with google</button>}
  />
);

export default SignIn;
