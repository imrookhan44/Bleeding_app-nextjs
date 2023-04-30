import React from "react";
import GlobeImage from "../../public/images/solution/SolutionGlobe.png";
import WorkingIcon1 from "../../public/images/solution/Working1.png";
import WorkingIcon2 from "../../public/images/solution/Working2.png";
import WorkingIcon3 from "../../public/images/solution/Working3.png";
import WorkingIcon4 from "../../public/images/solution/Working4.png";

const SolutionWorking = () => {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-6 text-center text-lg-start">
          <img src={GlobeImage.src} className="w-100" />
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="display-6 fw-semibold position-relative">
            We&apos;re <span className="text-primary">Working</span> All Over
            the World
          </h1>
          <p className="fs-5 position-relative">
            We nourish the needs of our clients with the best team distribution.
            In addition, our pool of talent helps us achieve outstanding and
            astonishing results in each project that we undertake.
          </p>
          <div className="d-flex flex-wrap text-center">
            <div className="col">
              <img src={WorkingIcon1.src} className="w-75" />
              <p>7+ Years Experience</p>
            </div>
            <div className="col">
              <img src={WorkingIcon2.src} className="w-75" />
              <p>150+ Projects</p>
            </div>
            <div className="col">
              <img src={WorkingIcon3.src} className="w-75" />
              <p>200% Revenue</p>
            </div>
            <div className="col">
              <img src={WorkingIcon4.src} className="w-75" />
              <p>97+ Recurring Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionWorking;
