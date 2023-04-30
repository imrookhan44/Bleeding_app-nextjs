import React from "react";
import WorkHeroImage from "../../public/images/work/OurWorkHero.png";
import Link from "next/link";

const WorkHero = () => {
  return (
    <section className="px-3 px-lg-5 pt-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-7 order-2 order-lg-1">
          <h1 className="display-3 fw-semibold">
            Portfolio of Our <span className="text-primary">Games</span> and{" "}
            <span className="text-primary">Mob</span> Apps
          </h1>
          <Link
            href="/contact"
            className="btn btn-lg btn-primary text-white px-5"
          >
            Contact Us
          </Link>
        </div>
        <div className="col-12 col-lg-5 order-1 order-lg-2">
          <img src={WorkHeroImage.src} className="w-100 mt-5" />
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
