import React from "react";
import "../css/Content.css";

interface InfoProps {
  title: string;
  text: string;
}

const Info: React.FC<InfoProps> = ({ title, text }) => {
  const id = `collapseExample${title.replace(/\s/g, "_")}`;

  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <div>
      <div className="d-inline-flex gap-1">
        <button
          className="btn custom"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={id}
          onClick={handleClick}
        >
          <div className="textContent">{title}</div>
        </button>
      </div>
      <div className="collapse" id={id}>
        <div className="card card-body custom pb-0">
          <div className="row">
            <div
              className="col-md-6 text-start"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
