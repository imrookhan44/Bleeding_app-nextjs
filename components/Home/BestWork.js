import React from "react";
import BestWorkImage from "../../public/images/BestWork.png";

const BestWork = () => {
  return (
    <section className="container my-5 py-5 light">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-lg-6 order-2 order-lg-1 py-3">
          <h1 className="display-3 fw-semibold">
            Some of Our <span className="text-primary">Best</span> Piece of Work
          </h1>
          <p className="fs-5">
            Bleeding Edge is a well-known mobile and web game development company. As evident from some of our best
            works, we provide new and unique game designs for these modern businesses. Our game developers use
            comprehensive tools and frameworks to create games that are easy to install on any platform and device.
          </p>
        </div>
        <div className="col-12 col-lg-6 order-1 order-lg-2 text-center text-lg-end">
          <img src={BestWorkImage.src} className="w-75" />
        </div>
      </div>
    </section>
  );
};

export default BestWork;
