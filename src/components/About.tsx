import React from "react";
import NavBar from "./NavBar";
import { TypeAnimation } from "react-type-animation";
import "../css/About.css";

function About() {
  return (
    <>
      <NavBar
        nameOne="Home"
        linkOne="home"
        nameTwo="Gilman Scholarship"
        linkTwo="gilman"
      />
      <div className="container move-down p-5">
        <div className="row">
          <TypeAnimation
            sequence={["About Me"]}
            wrapper="span"
            speed={{ type: "keyStrokeDelayInMs", value: 150 }}
            repeat={0}
            className="text text-left"
          />

          <div className="card card-body custom pb-0">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <img
                    src="images/me_blue.JPG"
                    className="img-fluid rounded"
                    alt="me and Blue"
                  ></img>
                </p>
              </div>
              <div className="col-md-6 d-flex align-items-center text-start info">
                <p>
                  Hello! I'm Dune Nguyen, a Computer Science student at Drexel
                  University with a minor addiction to Muay Thai and an
                  unwavering love for my canine companion, Blue. Come along as I
                  explore the vibrant cities of South Korea, conquer academic
                  challenges at Seoul National University, and discover myself
                  one adventure at a time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
