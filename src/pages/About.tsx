import React from "react";
import NavBar from "../components/NavBar";
import "../css/About.css";
import { translateThis } from "../utils/TranslateServices";
import { useTitleAnimation } from "../utils/TitleAnimation";

function About() {
  const typeAnimation = useTitleAnimation("About Me");
  return (
    <>
      <NavBar
        nameOne={translateThis("Home").String}
        linkOne="home"
        nameTwo={translateThis("Gilman Scholarship").String}
        linkTwo="gilman"
      />
      <div className="container move-down p-5">
        <div className="row">
          <div className="row">{typeAnimation}</div>
          <div className="card card-body custom pb-0">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <img
                    src="images/me_blue.JPG"
                    className="img-fluid rounded"
                    alt="Me and Blue"
                  ></img>
                </p>
              </div>
              <div className="col-md-6 d-flex align-items-center text-start textContent">
                <p>
                  {
                    translateThis(
                      "Hello! I'm Dune Nguyen, a Computer Science student at Drexel University with a minor addiction to Muay Thai and an unwavering love for my canine companion, Blue. Come along as I explore the vibrant cities of South Korea, conquer academic challenges at Seoul National University, and discover myself one adventure at a time!"
                    ).String
                  }
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
