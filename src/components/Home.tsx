import React from 'react';

import Content from "./Content";
import ScrollButton from "./ScrollButton";
import texts from "../texts/test";

function Home() {
  const numberOfWeeks = 15;

  return (
    <>
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
              img={"src/images/" + index + ".jpg"}
              textContent={texts[index]}
            />
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-center p-5">
        <ScrollButton />
      </div>
    </>
  );
}

export default Home;
