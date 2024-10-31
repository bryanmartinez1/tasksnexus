import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "src/components/navbar/Navbar";
import Home from "./pages/home/Home";
import { routes } from "src/constants/app";
import Help from "src/pages/help/Help";
import Groups from "src/pages/groups/Groups";
import Project from "src/pages/project/Project";
import Work from "src/pages/work/Work";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={routes.home.route} element={<Home />} />
        <Route path={routes.project.route} element={<Project />} />
        <Route path={routes.project.routeParameter} element={<Project />} />
        <Route path={routes.work.route} element={<Work />} />
        <Route path={routes.work.routeParameter} element={<Work />} />
        <Route path={routes.groups.route} element={<Groups />} />
        <Route path={routes.groups.routeParameter} element={<Groups />} />
        <Route path={routes.help.route} element={<Help />} />
        <Route path={routes.help.routeParameter} element={<Help />} />
        <Route path={routes.profile.route} element={<Home />} />
        <Route path={routes.profile.routeParameter} element={<Home />} />
        <Route path={routes.settings.route} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
