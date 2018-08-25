import React, { Fragment } from "react";
import styled from "styled-components";

const SignIn = ({ handleSignIn, render }) => (
  <Fragment>
    {render({
      rightItems: <button onClick={handleSignIn}>sign-in with google</button>
    })}
  </Fragment>
);

export default SignIn;
