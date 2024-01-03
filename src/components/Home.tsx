import React from "react";
import Timeline from "./Timeline";
import Landing from "./Landing";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12" style={{ height: "100vh" }}>
          <Landing />
        </div>
      </div>
      <div className="row">
        <div className="col-12" style={{ height: "100vh" }}>
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default Home;
