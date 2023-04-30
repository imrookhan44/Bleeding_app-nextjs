import React from "react";
import EngagementHeroImage from "../../public/images/engagement/EngagementHero.png";
import Link from "next/link";

const EngagementHero = () => {
  return (
    <section className="px-3 px-lg-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-7 order-2 order-lg-1">
          <h1 className="display-3 fw-semibold mt-5 pt-5">
            Engagement Models to Suit Your Gaming <span className="text-primary">Projects</span>
          </h1>
          <p className="fs-5 mt-4">
            Our aim is to provide you complete gaming/metaverse solutions that meets your requirements.
          </p>
          <Link href="/contact" className="btn btn-lg btn-primary text-white px-5">
            Contact Us
          </Link>
        </div>
        <div className="col-12 col-lg-5 order-1 order-lg-2">
          <img src={EngagementHeroImage.src} className="w-100 mt-5" />
        </div>
      </div>
    </section>
  );
};

export default EngagementHero;
