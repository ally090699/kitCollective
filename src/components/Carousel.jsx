import React from "react";

export default function Carousel(props) {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={props.img1}
              className="d-block w-100"
              alt="Coding in Action"
            />
          </div>
          <div className="carousel-item">
            <img
              src={props.img2}
              className="d-block w-100"
              alt="Designing in Action"
            />
          </div>
          <div className="carousel-item">
            <img
              src={props.img3}
              className="d-block w-100"
              alt="Crocheting In Action"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
