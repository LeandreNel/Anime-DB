import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import ComparePage from "./ComparePage";
import TimeLinePage from "./TimeLinePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/timeline" element={<TimeLinePage />} />
      </Routes>
    </Router>
  );
}

export default App;
