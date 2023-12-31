import React from "react";
import "../css/Landing.css";
import { TypeAnimation } from "react-type-animation";
import NavBar from "./NavBar";
import { ChevronDownIcon } from "@primer/octicons-react";

function Landing() {
  return (
    <>
      <div className="container">
        <div className="row custom-height"></div>
        <div className="row">
          <TypeAnimation
            className="text text-left p-5"
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

      <div className="position-absolute bottom-0 start-50 translate-middle-x text-center p-5 arrow">
        <ChevronDownIcon className="chevron-icon p-3" />
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
