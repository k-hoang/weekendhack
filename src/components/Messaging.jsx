import React from "react";
import "../api/messaging";

import { listenForMessages } from "../api/messaging";

const Messaging = () => (
  <div>
    <button onClick={() => listenForMessages()}>LISTEN</button>
  </div>
);

export default Messaging;
