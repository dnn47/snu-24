import React from "react";
import "../css/NavBar.css";

function NavBar() {
  return (
    <>
      <div>
        <ul
          className="nav column justify-content-end"
          style={{ textAlign: "right" }}
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              style={{
                color: "#003081",
                fontSize: "100%",
              }}
              href="#"
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              style={{
                color: "#003081",
                fontSize: "100%",
              }}
              href="#"
            >
              Gilman Scholarship
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
