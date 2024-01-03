import React from "react";
import "../css/Landing.css";
import { TypeAnimation } from "react-type-animation";
import NavBar from "./NavBar";

function Landing() {
  return (
    <>
      <div className="container">
        <div className="row custom-height"></div>
        <div className="row">
          <TypeAnimation
            className="text-title text-left p-5"
            sequence={[
              "hi, i'm dune\ni studied abroad at SNU\nthis is my story",
            ]}
            wrapper="span"
            speed={{ type: "keyStrokeDelayInMs", value: 100 }}
            deletionSpeed={10}
            style={{
              whiteSpace: "pre",
            }}
            repeat={0}
          />
        </div>
      </div>
      <div>
        <NavBar
          nameOne="About Me"
          linkOne="about"
          nameTwo="Gilman Scholarship"
          linkTwo="gilman"
        />
      </div>
    </>
  );
}

export default Landing;
