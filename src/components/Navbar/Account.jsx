import React from "react";
import styled from "styled-components";

import StyledNavbar from "./StyledNavbar";

const Account = ({ displayName, handleLogout }) => (
  <StyledNavbar
    leftItems={<Message>Welcome, {displayName}</Message>}
    rightItems={<button onClick={handleLogout}>Logout</button>}
  />
);

const Message = styled.h2`
  margin: 0;
`;

export default Account;
