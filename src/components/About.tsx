import React from "react";
import NavBar from "./NavBar";

function About() {
  return (
    <>
      <NavBar
        nameOne="Home"
        linkOne="home"
        nameTwo="Gilman Scholarship"
        linkTwo="gilman"
      />
      <div className="d-flex align-items-center justify-content-center vh-100">
        <h1>About Page</h1>
      </div>
    </>
  );
}

export default About;
