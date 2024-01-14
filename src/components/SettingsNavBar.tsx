import React from "react";
import "../css/NavBar.css";
import { translateThis } from "../utils/TranslateServices";

function SettingsNavBar() {
  return (
    <>
      <div className="container position-absolute top-0 end-0 p-5">
        <ul
          className="nav column justify-content-end"
          style={{ textAlign: "right" }}
        >
          <li className="nav-item">
            <a
              className="nav-link"
              style={{
                color: "#003081",
                fontSize: "125%",
              }}
              href={`/home`}
            >
              {translateThis("Home").String}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{
                color: "#003081",
                fontSize: "125%",
              }}
              href={`/about`}
            >
              {translateThis("About Me").String}
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={{
                color: "#003081",
                fontSize: "125%",
              }}
              href={`/gilman`}
            >
              {translateThis("Gilman Scholarships").String}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SettingsNavBar;
