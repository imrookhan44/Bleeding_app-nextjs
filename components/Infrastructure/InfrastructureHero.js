import React from "react";
import InfrastructureHeroImage from "../../public/images/infrastructure/InfrastructureHero.png";
import Link from "next/link";

const InfrastructureHero = () => {
  return (
    <section className="px-3 px-lg-5 pt-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-7 order-2 order-lg-1">
          <h1 className="display-3 fw-semibold mt-5 pt-5">
            Bleeding Edge Studio <span className="text-primary">Key</span> Infrastructure
          </h1>
          <p className="fs-5 mt-4">
            Delivering a perfect solution is a process that is possible only if certain factors are aligned together and
            a perfect infrastructure is one of the factors. Capermint has created such an ambience that can boost the
            efficiency of everyone.
          </p>
          <Link href="/contact" className="btn btn-lg btn-primary text-white px-5">
            Contact Us
          </Link>
        </div>
        <div className="col-12 col-lg-5 order-1 order-lg-2">
          <img src={InfrastructureHeroImage.src} className="w-100 mt-5" />
        </div>
      </div>
    </section>
  );
};

export default InfrastructureHero;
