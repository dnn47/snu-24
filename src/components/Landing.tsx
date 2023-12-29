import React from "react";
import "../css/Landing.css";
import { TypeAnimation } from "react-type-animation";

function Landing() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="container">
          <h1>Study Aboard at:</h1>
          <br />
          <h1 className="text">Seoul National University</h1>
          {/* <TypeAnimation
            sequence={["Seoul National University"]}
            wrapper="span"
            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
            deletionSpeed={10}
            style={{ fontSize: "1000%", display: "inline-block" }}
            repeat={0}
          /> */}
        </div>
      </div>
    </>
  );
}

export default Landing;
