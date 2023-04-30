import React from "react";
import Game1 from "../../public/images/service/LatestGame1.png";
import Game2 from "../../public/images/service/LatestGame2.png";
import Game3 from "../../public/images/service/LatestGame3.png";
import Link from "next/link";

const ServiceLatestGames = () => {
  return (
    <section className="container mt-5 pt-5">
      <div className="row g-3">
        <div className="col-12 col-lg-6">
          <h1>
            Our Latest <span className="text-primary">Mobile</span> Games
          </h1>
          <p className="fs-5">
            Bleeding Edge is a well-known mobile and web game development
            company. As evident from some of our best works, we provide new and
            unique game designs for these productions . Our game developers use
            comprehensive tools and frameworks to create games that are easy to
            install on any platform and device.
          </p>
          <Link
            href="/contact"
            className="btn btn-primary text-white fw-semibold px-4"
          >
            GET A QUOTE
          </Link>
        </div>
        <div className="col-12 col-lg-6">
          <img src={Game1.src} className="img-fluid" />
        </div>
        <div className="col-12 col-lg-7">
          <img src={Game2.src} className="img-fluid" />
        </div>
        <div className="col-12 col-lg-5">
          <img src={Game3.src} className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default ServiceLatestGames;
