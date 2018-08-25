import React from "react";

const Account = ({ displayName, handleSignOut }) => (
  <React.Fragment>
    <h2>Welcome, {displayName}</h2>
    <button onClick={handleSignOut}>Logout</button>
  </React.Fragment>
);

export default Account;
