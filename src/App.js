import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Herosection from "./Herosection";

function App() {
  return (
    <Router>
      <>
        {/* Header component */}

        <Header />
        <Herosection/>

      </>
    </Router>
  );
}

export default App;
