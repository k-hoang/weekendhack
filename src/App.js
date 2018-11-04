import React from "react";

import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";

const App = () => (
  <AuthProvider>
    <Navbar />
  </AuthProvider>
);

export default App;
