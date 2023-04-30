import React from "react";
import ArchitectureImage from "../../public/images/infrastructure/InfrastructureArchitecture.png";

const InfrastructureArchitecture = () => {
  return (
    <section className="container mt-5 pt-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 text-center text-lg-end order-lg-2">
          <img src={ArchitectureImage.src} className="w-75" />
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="display-6 fw-semibold">
            Bleeding Edge Studio <span className="text-primary">Amazing</span> Architecture
          </h1>
          <p className="fs-5">
            The workplace should be such that motivates a person to push themselves and to achieve more and more.
            Bleeding Edge architecture is built with the same vision. Bleeding Edge motive is to go to the next level,
            and well-planned architecture is one small step towards this goal, as it creates such a climate that boosts
            the dedication of the whole Bleeding Edge family towards this goal.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureArchitecture;
