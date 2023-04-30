import React from "react";
import HeroImage from "../../public/images/service/ServiceHero.png";
import Link from "next/link";
const ServiceHero = ({ title }) => {
  return (
    <section className="px-3 px-lg-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 order-2 order-lg-1">
          <h1 className="display-3 fw-semibold">{title || "Android Game Development"}</h1>
          <p className="fs-5">
            We’re an industry leader in {title || "Android Game Development"} with an established track record for
            delivering immersive and captivating {title || "Android Game Development"} for some of the largest and most
            cutting-edge businesses across the world
          </p>
          <Link href="/contact" className="btn btn-primary text-white fw-semibold px-4">
            REQUEST A QUOTE
          </Link>
        </div>
        <div className="col-12 col-lg-6 order-1 order-lg-2">
          <img src={HeroImage.src} className="w-100" />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
