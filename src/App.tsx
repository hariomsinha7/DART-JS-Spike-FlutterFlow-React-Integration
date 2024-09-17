import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Flutterflow from "./Flutterflow";
import Landing from "./Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/test/v1" element={<Flutterflow />} />
      </Routes>
    </Router>
  );
}

export default App;
