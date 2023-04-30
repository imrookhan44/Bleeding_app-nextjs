import React from "react";
import CareerHeroImage from "../../public/images/career/CareerHero.png";

const CareerHero = () => {
  console.log(CareerHeroImage, "careeer");
  return (
    <section className="px-3 px-lg-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-7 order-2 order-lg-1">
          <h1>
            We’ re{" "}
            <span className="display-1 fw-semibold text-primary">Hiring</span>
          </h1>
          <h3>Come to join Us!</h3>
          <p className="fs-5 mt-4">
            If you are full of passion, an out of the box thinker, and willing
            to work as a team, then we may have the perfect opportunity to shape
            your career.
          </p>
          <a
            className="btn btn-lg btn-primary text-white px-4"
            href="#find-opening-section"
          >
            See Current OPENINGS
          </a>
        </div>
        <div className="col-12 col-lg-5 order-1 order-lg-2">
          <img src={CareerHeroImage?.src} className="w-100 mt-5" />
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
