interface ContentProps {
  week: number;
  img: string;
  textContent: string;
}

const Content: React.FC<ContentProps> = ({ week, img, textContent }) => {
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
          data-bs-target={`#collapseExample${week}`}
          aria-expanded="false"
          aria-controls={`collapseExample${week}`}
          onClick={handleClick}
        >
          {`Week ${week}`}
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
                  alt={`Week ${week}`}
                />
              </p>
            </div>
            <div className="col-md-6 text-start">
              <p>{textContent}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
