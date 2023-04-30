import React from "react";
import SquadImage from "../../public/images/about/AboutOurSquad.png";
import Link from "next/link";

const AboutSquad = () => {
  return (
    <section className="container mt-5 pt-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 text-center text-lg-end order-lg-2">
          <img src={SquadImage.src} className="w-75" />
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="display-6 fw-semibold">
            Our <span className="text-primary">Squad</span>
          </h1>
          <p className="fs-5">
            With 50+ Years of Combined Game Development experience under our Belt , Our Game Production Squad is the
            best you will find in the Business . We have developed Hundreds of games from Scratch and have Game
            Production Managers , Game Designers , Game Modelers , ASO Experts , Game Developers , Multi Player
            Engineers , DevOPS in our Squad . We have developed games from small scale Facebook instant games to Large
            Multi Player Game Titles . Trust Bleeding Edge Studio Once and you will be trusting Cross Jump for life for
            your Game Development Needs.
          </p>
          <Link href="/contact" className="btn btn-primary text-white fw-semibold px-4">
            GET A QUOTE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSquad;
