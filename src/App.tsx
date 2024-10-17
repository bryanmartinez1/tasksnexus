import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "src/components/navbar/Navbar";
import Home from "./pages/home/Home";
import { routes } from "src/components/appConstants";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routes.home.route} element={<Home />} />
        <Route path={routes.project.route} element={<Home />} />
        <Route path={routes.project.routeParameter} element={<Home />} />
        <Route path={routes.work.route} element={<Home />} />
        <Route path={routes.work.routeParameter} element={<Home />} />
        <Route path={routes.groups.route} element={<Home />} />
        <Route path={routes.groups.routeParameter} element={<Home />} />
        <Route path={routes.help.route} element={<Home />} />
        <Route path={routes.help.routeParameter} element={<Home />} />
        <Route path={routes.profile.route} element={<Home />} />
        <Route path={routes.profile.routeParameter} element={<Home />} />
        <Route path={routes.settings.route} element={<Home />} />
        <Route path={routes.signUp.route} element={<Home />} />
        <Route path={routes.logIn.route} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
