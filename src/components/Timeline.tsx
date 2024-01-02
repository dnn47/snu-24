import React from "react";
import Content from "./Content";
import texts from "../texts/test";

function Timeline() {
  const numberOfWeeks = 15;

  return (
    <div className="container mx-auto text-center">
      {Array.from({ length: numberOfWeeks }, (_, index) => (
        <div key={index} className="row">
          {index > 0 && (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ height: "200px" }}
            >
              <div className="vr"></div>
            </div>
          )}
          <Content
            week={index + 1}
            img={"images/" + index + ".jpg"}
            textContent={texts[index]}
          />
        </div>
      ))}
      <div className="d-flex align-items-center justify-content-center p-5"></div>
    </div>
  );
}

export default Timeline;
