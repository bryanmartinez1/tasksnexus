import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "src/components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Home />} />
        <Route path="/project/:projectID" element={<Home />} />
        <Route path="/work" element={<Home />} />
        <Route path="/work/:wordID" element={<Home />} />
        <Route path="/groups" element={<Home />} />
        <Route path="/groups/:groupID" element={<Home />} />
        <Route path="/help" element={<Home />} />
        <Route path="/help/:helpID" element={<Home />} />
        <Route path="/settings" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/profile/profileID" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
