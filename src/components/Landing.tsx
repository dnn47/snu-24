import React from "react";
import "../css/Landing.css";

function Landing() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <h1 className="snu-text">SNU</h1>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "2rem", color: "#C8D4DF" }}>↓</span>
      </div>
    </>
  );
}

export default Landing;
