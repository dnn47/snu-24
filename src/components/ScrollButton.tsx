import "bootstrap-icons/font/bootstrap-icons.css";

function ScrollButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="d-flex gap-1">
        <button
          className="btn custom bi bi-arrow-up"
          onClick={scrollToTop}
          type="button"
        ></button>
      </div>
    </>
  );
}

export default ScrollButton;
