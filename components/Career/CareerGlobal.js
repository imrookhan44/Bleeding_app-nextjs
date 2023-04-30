import React from "react";

import Icon1 from "../../public/images/career/CareerGlobal1.png";
import Icon2 from "../../public/images/career/CareerGlobal2.png";
import Icon3 from "../../public/images/career/CareerGlobal3.png";
import Icon4 from "../../public/images/career/CareerGlobal4.png";
import Icon5 from "../../public/images/career/CareerGlobal5.png";

const CareerGlobal = () => {
  const industries = [
    { icon: Icon1, count: 30, title: "Mentors" },
    { icon: Icon2, count: 3500, title: "Visitors" },
    { icon: Icon3, count: 36, title: "Startups" },
    { icon: Icon4, count: 8, title: "Countries" },
    { icon: Icon5, count: 8, title: "Countries" },
  ];

  return (
    <section className="my-5 container light text-center">
      <h2 className="mb-4">
        A <span className="text-primary">Global</span> Company
      </h2>
      <p className="fs-5">
        We do our best to offer a healthy working environment to all our
        invaluable employees so that you can render the best results. Capermint
        also offers attractive benefits that make us one of the best companies
        to work with.
      </p>
      <div className="row justify-content-center mt-5">
        {industries.map((f,index) => (
          <div key={index} className="col-6 col-20 px-3 mb-3">
            <div className="border border-dark rounded glass p-3">
              <img src={f.icon?.src} height="120" style={{ margin: "-20px" }} />
              <h5 className="m-0">{f.count}</h5>
              <h5 className="m-0">{f.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerGlobal;
