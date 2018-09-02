import React from "react";
import styled from "styled-components";

import Navbar from "../Navbar";

const Account = ({ displayName, handleSignOut }) => (
  <Navbar
    leftItems={<Message>Welcome, {displayName}</Message>}
    rightItems={<button onClick={handleSignOut}>Logout</button>}
  />
);

const Message = styled.h2`
  margin: 0;
`;

export default Account;
