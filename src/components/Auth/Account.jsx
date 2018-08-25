import React, { Fragment } from "react";
import styled from "styled-components";

const Account = ({ displayName, handleSignOut, render }) => (
  <Fragment>
    {render({
      leftItems: <Message>Welcome, {displayName}</Message>,
      rightItems: <button onClick={handleSignOut}>Logout</button>
    })}
  </Fragment>
);

const Message = styled.h2`
  margin: 0;
`;

export default Account;
