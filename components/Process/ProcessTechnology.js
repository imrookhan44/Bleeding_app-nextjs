import React from "react";
import TechImage from "../../public/images/process/ProcessTechnology.png";
import Link from "next/link";

const ProcessTechnology = () => {
  return (
    <section className="container mt-5 pt-5">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 text-center text-lg-start">
          <img src={TechImage.src} className="w-75" />
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="display-6 fw-semibold py-3">
            The further you go into <span className="text-primary">Technology</span>, the further you advance towards a
            better, more productive, and opportunistic future.
          </h1>

          <Link href="/contact" className="btn btn-lg btn-primary text-white px-5">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessTechnology;
