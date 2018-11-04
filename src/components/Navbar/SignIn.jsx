import React from "react";

import StyledNavbar from "./StyledNavbar";

const SignIn = ({ handleLogin }) => (
  <StyledNavbar
    rightItems={<button onClick={handleLogin}>sign-in with google</button>}
  />
);

export default SignIn;
