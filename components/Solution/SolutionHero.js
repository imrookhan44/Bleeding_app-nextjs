import React from "react";
import SolutionImage from "../../public/images/solution/SolutionHero.png";

const SolutionHero = ({ content }) => {
  return (
    <section className="row g-0" style={{ minHeight: "100vh" }}>
      <div className="col-12 col-lg-7 order-2 order-lg-1 ps-4 ps-lg-5 pt-lg-5 ">
        <h1 className="display-3 fw-semibold mt-5">
          {content?.title || "We Grow your Business Through Digital Experiences"}
        </h1>
        <p className="fs-5 mt-5">
          {content?.content[0]?.text ||
            "Startups and enterprise leaders need a companion that can aid them transform and mold their ideas into magnetic games and apps. At Bleeding Edge, we not only design & develop immersive games and apps, but we also help the clients to provide the best user experience to their consumers."}
        </p>
      </div>
      <div className="col-12 col-lg-5 order-1 order-lg-2 text-end">
        <img src={content?.image.src || SolutionImage.src} alt="Hero.png" className="img-fluid" />
      </div>
    </section>
  );
};

export default SolutionHero;
