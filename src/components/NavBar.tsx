import React from "react";
import "../css/NavBar.css";

interface NavBarProps {
  nameOne: string;
  linkOne: string;
  nameTwo: string;
  linkTwo: string;
}

const NavBar: React.FC<NavBarProps> = ({
  nameOne,
  linkOne,
  nameTwo,
  linkTwo,
}) => {
  return (
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
            href={`/${linkOne}`}
          >
            {nameOne}
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            style={{
              color: "#003081",
              fontSize: "125%",
            }}
            href={`/${linkTwo}`}
          >
            {nameTwo}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
