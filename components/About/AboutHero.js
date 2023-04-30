import React from "react";
import AboutHeroImage from "../../public/images/about/AboutHero.png";
import Link from "next/link";

const AboutHero = () => {
  return (
    <section className="px-3 px-lg-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 order-2 order-lg-1">
          <h1 className="display-3 fw-semibold mt-5 pt-5">
            <span className="border-3 border-primary border-bottom">About</span> Us
          </h1>
          <p className="fs-5 mt-4">
            Bleeding Edge is known for developing end-to-end mobile game development solutions. We focus on designing
            and developing mobile games for all popular devices and modernizing and transforming existing web-based
            games built with Flash technology. We own a team of highly skilled designers and developers specializing in
            developing games for Android/iOS mobile platforms. We develop visually rich and innovative games built to
            grow your business. Without integrity, transparency, expertise, and total commitment to their clients,
            long-term business relationships can only be built when partners. Bleeding Edge applies these principles to
            every contract and strives to be a reliable partner. What sets us apart from others is our end-to-end mobile
            game development, excellent track record in mobile game development for many platforms, high-profile
            short-term projects, providing game maintenance and upgrade support, access to true talent and gaming
            experts, and using the latest technology platforms to build scalable games.
          </p>
          <Link href="/contact" className="btn btn-lg btn-outline-primary px-5">
            Contact Us
          </Link>
        </div>
        <div className="col-12 col-lg-6 order-1 order-lg-2">
          <img src={AboutHeroImage.src} className="w-100 mt-5 pt-5" />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
