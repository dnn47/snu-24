import React from "react";
import "../css/Landing.css";
import NavBar from "./NavBar";
import { translateThis } from "../utils/TranslateServices";
import { useTitleAnimation } from "../utils/TitleAnimation";

function Landing() {
  const typeAnimation = useTitleAnimation(
    "hi, i'm Dune\ni studied abroad at SNU\nthis is my story"
  );
  return (
    <>
      <div className="container p-5">
        <div className="row custom-height"></div>
        <div className="row">{typeAnimation}</div>
      </div>
      <NavBar
        nameOne={translateThis("About Me").String}
        linkOne="about"
        nameTwo={translateThis("Gilman Scholarship").String}
        linkTwo="gilman"
      />
    </>
  );
}

export default Landing;
