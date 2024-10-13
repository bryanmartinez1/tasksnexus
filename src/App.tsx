import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import Navbar from "src/components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project name="Bryan" />} />
        <Route path="/work" element={<Home />} />
        <Route path="/groups" element={<Project name="Bryan" />} />
        <Route path="/help" element={<Home />} />
        <Route path="/settings" element={<Project name="Bryan" />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/create" element={<Project name="Bryan" />} />
      </Routes>
    </div>
  );
}

export default App;
