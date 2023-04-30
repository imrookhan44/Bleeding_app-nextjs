import React from "react";
import AwardImage from "../../public/images/service/ServiceAwards.png";
import Ribbon from "../../public/images/service/Ribbon.svg";
import Ribbon2 from "../../public/images/service/Ribbon2.svg";

const ServiceAward = () => {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 text-center text-lg-start">
          <img src={AwardImage.src} className="w-75" />
        </div>
        <div className="col-12 col-lg-6">
          <div className="position-relative">
            <img
              src={Ribbon.src}
              className="position-absolute translate-middle"
            />
            <h1 className="display-6 fw-semibold position-relative">
              Bleeding Edge Studio is an{" "}
              <span className="text-primary">AWARD</span> winning mobile app
              development company
            </h1>
          </div>
          <div className="position-relative">
            <img
              src={Ribbon2.src}
              className="position-absolute end-0 top-100"
            />
            <p className="fs-5 position-relative">
              Our mobile game studios offer art and design, user experience
              design, cross-platform mobile game development services, and
              for-hire mobile game developers for mobile platforms iOS and
              Android games.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAward;
