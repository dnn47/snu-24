import React from "react";
import Timeline from "../components/Timeline";
import Landing from "../components/Landing";
import "../css/Home.css";

function Home() {
  return (
    <div className="container">
      <div className="row landing-container">
        <Landing />
      </div>
      <div className="row timeline-container">
        <Timeline />
      </div>
    </div>
  );
}

export default Home;
