import React from "react";
import AnimImage from "../../public/images/solution/SolutionAnim.png";
import Link from "next/link";

const SolutionAnim = ({ title }) => {
  return (
    <section className="container mt-5 pt-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 text-center text-lg-end order-lg-2">
          <img src={AnimImage.src} className="w-75" />
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="display-6 fw-semibold">Best {title} Developers & Designers under One Roof</h1>
          <p className="fs-5">
            Awesome Game Development Agency looks forward to develop {title} according to your Requirements
          </p>
          <p className="fs-5">
            Bleeding Edge Studio is a reliable Games Partner for more then 200+ Games Publishers and Fortune 500
            Companies since 2016. Startups and enterprise Leaders need awesome Game developers that can help them to
            convert their ideas in to Magnetic Games & Apps. That’s where Bleeding Edge comes in . We not only design
            and develop immersive games and apps but we also help our clients to price the best user experience to their
            users.
          </p>
          <Link href="/contact" className="btn btn-primary text-white fw-semibold px-4">
            REQUEST A QUOTE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionAnim;
