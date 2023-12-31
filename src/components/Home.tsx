import React from "react";
import Timeline from "./Timeline";
import Landing from "./Landing";
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
