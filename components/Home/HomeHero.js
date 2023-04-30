import React from "react";
import HeroImage from "../../public/images/home/Hero.png";

const HomeHero = () => {
  return (
    <section className="row g-0 align-items-center pt-5">
      <div className="col-12 col-lg-8 order-2 order-lg-1 ps-4 ps-lg-5">
        <h1 className="display-3 fw-semibold mt-5 pt-5">
          Innovative Game & Metaverse Design and Development Services
        </h1>
        <p className="fs-5">
          We have a best-in-class Game & Metaverse development services team so
          that you can be assured of the best service. With the pure
          professional grade, project delivery is always on schedule and
          strictly adheres to coding standards.
        </p>
      </div>
      <div className="col-12 col-lg-4 order-1 order-lg-2">
        <img src={HeroImage.src} alt="Hero.png" className="img-fluid pt-5 ps-3" />
      </div>
    </section>
  );
};

export default HomeHero;
