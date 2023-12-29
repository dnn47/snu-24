import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Gilman from "./components/Gilman";
import Home from "./components/Home";
import Landing from "./components/Landing";

const App: React.FC = () => {
  const isHomePage = window.location.pathname === "/";

  return (
    <Router>
      {!isHomePage && <NavBar />}

      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gilman" element={<Gilman />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
