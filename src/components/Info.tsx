import React from "react";
import "../css/Content.css";

interface InfoProps {
  title: string;
  text: string;
}

const Info: React.FC<InfoProps> = ({ title, text }) => {
  const id = `collapseExample${title.replace(/\s/g, "_")}`;

  return (
    <div>
      <div className="d-inline-flex gap-1">
        <button
          className="btn custom"
          type="button"
          data-bs-toggle=""
          data-bs-target={`#${id}`}
          aria-expanded="false"
          aria-controls={id}
        >
          <div className="textContent">{title}</div>
        </button>
      </div>
      <div className="" id={id}>
        <div className="card card-body custom">
          <div className="row">
            <div
              className="col text-start"
              dangerouslySetInnerHTML={{ __html: text }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
