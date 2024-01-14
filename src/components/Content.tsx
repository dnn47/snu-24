import React from "react";
import "../css/Content.css";
import { translateThis } from "../utils/TranslateServices";

interface ContentProps {
  week: number;
  img: string;
  textContent: string;
}

const Content: React.FC<ContentProps> = ({ week, img, textContent }) => {
  return (
    <div>
      <div className="d-inline-flex gap-1">
        <button
          className="btn custom"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapseExample${week}`}
          aria-expanded="false"
          aria-controls={`collapseExample${week}`}
        >
          <div className="textContent">
            {translateThis(`Week ${week}`).String}
          </div>
        </button>
      </div>
      <div className="collapse" id={`collapseExample${week}`}>
        <div className="card card-body custom pb-0">
          <div className="row">
            <div className="col-md-6">
              <p>
                <img
                  src={img}
                  className="img-fluid rounded"
                  alt={translateThis(`Week ${week}`).String}
                />
              </p>
            </div>
            <div className="col-md-6 text-start">
              <p>{translateThis(textContent).String}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
