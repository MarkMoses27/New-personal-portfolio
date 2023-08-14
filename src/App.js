import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <>
        {/* Header component */}

        <Header />
      </>
    </Router>
  );
}

export default App;
