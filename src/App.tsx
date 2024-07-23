import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gilman from "./pages/Gilman";
import Settings from "./pages/Settings";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gilman" element={<Gilman />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/*" element={<Navigate to="/Home" />} />
      </Routes>
    </Router>
  );
};

export default App;
