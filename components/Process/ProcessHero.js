import React from "react";
import ProcessHeroImage from "../../public/images/process/ProcessHero.png";
import Link from "next/link";

const ProcessHero = () => {
  return (
    <section className="px-3 px-lg-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 order-2 order-lg-1 mt-lg-5 pt-lg-5">
          <h1 className="display-4 fw-semibold mt-5 pt-5">
            Our Processes define our <span className="text-primary">Success.</span> This is how we continue to Succeed.
          </h1>
          <p className="fs-5 mt-4">
            We turn Ideas in to Games with our well defined Processes . Our Processes include Discovery , Production ,
            Testing , Release and Post release
          </p>
          <Link href="/contact" className="btn btn-lg btn-primary text-white px-5">
            Contact Us
          </Link>
        </div>
        <div className="col-12 col-lg-6 order-1 order-lg-2">
          <img src={ProcessHeroImage.src} className="w-100 mt-5 pt-5" />
        </div>
      </div>
    </section>
  );
};

export default ProcessHero;
