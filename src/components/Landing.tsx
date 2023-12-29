import React from "react";
import "../css/Landing.css";
import { TypeAnimation } from "react-type-animation";

function Landing() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        {/* <h1 className="animation">Seoul National University</h1> */}
        {/* <img className="logo animation" src={"src/images/logo.png"} alt="SNU Logo" /> */}

        <TypeAnimation
          sequence={[
            "Seoul Stories: Neon Nights",
            1000,
            "Seoul Stories: Soju Shenanigans",
            1000,
            "Seoul Stories: Lost",
            1000,
            "Seoul Stories: Taekwondo",
            1000,
            "Seoul Stories: Karaoke Nights",
            1000,
            "Seoul Stories: Culture Shock",
            1000,
          ]}
          wrapper="span"
          speed={{ type: "keyStrokeDelayInMs", value: 100 }}
          deletionSpeed={10}
          style={{ fontSize: "10vh", display: "inline-block" }}
          repeat={Infinity}
        />
      </div>
    </>
  );
}

export default Landing;
