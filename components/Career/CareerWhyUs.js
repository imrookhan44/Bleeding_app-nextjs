import React from "react";
import Icon1 from "../../public/images/career/CareerWhy1.png";
import Icon2 from "../../public/images/career/CareerWhy2.png";
import Icon3 from "../../public/images/career/CareerWhy3.png";
import Icon4 from "../../public/images/career/CareerWhy4.png";
import Icon5 from "../../public/images/career/CareerWhy5.png";
import Icon6 from "../../public/images/career/CareerWhy6.png";
import Icon7 from "../../public/images/career/CareerWhy7.png";
import Icon8 from "../../public/images/career/CareerWhy8.png";
import Icon9 from "../../public/images/career/CareerWhy9.png";
import Icon10 from "../../public/images/career/CareerWhy10.png";
import Icon11 from "../../public/images/career/CareerWhy11.png";
import Icon12 from "../../public/images/career/CareerWhy12.png";

const CareerWhyUs = () => {
  const industries = [
    { icon: Icon1, title: "Group Activity" },
    { icon: Icon2, title: "Employees Allowances" },
    { icon: Icon3, title: "Social Security" },
    { icon: Icon4, title: "Achievement Awards" },
    { icon: Icon5, title: "Meal Breaks" },
    { icon: Icon6, title: "No Dress Code" },
    { icon: Icon7, title: "Pay Raise" },
    { icon: Icon8, title: "Sick Leave" },
    { icon: Icon9, title: "Personal Leave" },
    { icon: Icon10, title: "Effective Communication" },
    { icon: Icon11, title: "Sponsor Events" },
    { icon: Icon12, title: "Politics Free Environment" },
  ];

  return (
    <section className="my-5 container light text-center">
      <h2 className="mb-4">
        Why You’d Love To{" "}
        <span className="border-3 border-primary border-bottom">Work</span> With
        Us
      </h2>
      <p className="fs-5">
        We do our best to offer a healthy working environment to all our
        invaluable employees so that you can render the best results. Capermint
        also offers attractive benefits that make us one of the best companies
        to work with.
      </p>
      <div className="row p-2 p-lg-4">
        {industries.map((f,index) => (
          <div key={index} className="col-6 col-lg-2 px-3 mb-5">
            <img src={f.icon?.src} height="150" />
            <h5>{f.title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerWhyUs;
