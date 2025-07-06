import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import OptionTiles from "./pages/OptionTiles";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Home/Tasks" element={<Tasks />} />
          <Route path="/Home/Tasks/OptionTiles" element={<OptionTiles />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
