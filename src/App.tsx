import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Gilman from "./components/Gilman";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gilman" element={<Gilman />} />
        <Route path="/*" element={<Navigate to="/Home" />} />
      </Routes>
    </Router>
  );
};

export default App;
