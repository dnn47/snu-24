import React from "react";
import "../css/Landing.css";
import { TypeAnimation } from "react-type-animation";
import NavBar from "./NavBar";
import { ChevronDownIcon } from "@primer/octicons-react";

function Landing() {
  return (
    <>
      <div className="">
        <div className="position-absolute bottom-0 start-0">
          <div
            className="d-flex"
            style={{ whiteSpace: "pre", padding: "5rem" }}
          >
            <TypeAnimation
              sequence={[
                "hi, i'm dune\ni studied abroad at SNU\nthis is my story",
              ]}
              wrapper="span"
              speed={{ type: "keyStrokeDelayInMs", value: 150 }}
              deletionSpeed={10}
              style={{
                whiteSpace: "pre",
                position: "relative",
                top: "50%",
              }}
              repeat={0}
              className="text text-left"
            />
          </div>
        </div>
        <div className="position-absolute bottom-0 start-50 translate-middle-x text-center p-5 arrow">
          <ChevronDownIcon className="chevron-icon" />
        </div>
        <div className="p-4">
          <NavBar />
        </div>
      </div>
    </>
  );
}

export default Landing;
