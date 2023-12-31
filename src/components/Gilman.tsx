import React from "react";
import NavBar from "./NavBar";

function Gilman() {
  return (
    <>
      <NavBar
        nameOne="Home"
        linkOne="home"
        nameTwo="About Me"
        linkTwo="about"
      />

      <div className="d-flex align-items-center justify-content-center vh-100">
        <h1>Gilman Page</h1>
      </div>
    </>
  );
}

export default Gilman;
