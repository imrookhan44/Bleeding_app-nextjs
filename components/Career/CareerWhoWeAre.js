import React from "react";
import WhoWeAreImage from "../../public/images/career/CareerWhoWeAre.png";

const CareerWhoWeAre = () => {
  return (
    <section className="container mt-5 pt-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 text-center text-lg-end order-lg-2">
          <img src={WhoWeAreImage?.src} className="w-75" />
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="display-6 fw-semibold">
            Who <span className="text-primary">We</span> Are
          </h1>
          <p className="fs-5">
            We are a people-based company who relies on its talented staff to
            develop the most innovative and revolutionary mobile game and app
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CareerWhoWeAre;
