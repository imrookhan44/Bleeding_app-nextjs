import React from "react";
import Icon1 from "../../public/images/about/IndustryIcon1.png";
import Icon2 from "../../public/images/about/IndustryIcon2.png";
import Icon3 from "../../public/images/about/IndustryIcon3.png";
import Icon4 from "../../public/images/about/IndustryIcon4.png";
import Icon5 from "../../public/images/about/IndustryIcon5.png";
import Icon6 from "../../public/images/about/IndustryIcon6.png";
import Icon7 from "../../public/images/about/IndustryIcon7.png";
import Icon8 from "../../public/images/about/IndustryIcon8.png";
import Icon9 from "../../public/images/about/IndustryIcon9.png";
import Icon10 from "../../public/images/about/IndustryIcon10.png";

const AboutIndustries = () => {
  const industries = [
    { icon: Icon1, title: "GAMING & ENTERTAINMENT" },
    { icon: Icon2, title: "BANKING" },
    { icon: Icon3, title: "EDUCATION" },
    { icon: Icon4, title: "HEALTHCARE" },
    { icon: Icon5, title: "Media Industry" },
    { icon: Icon6, title: "HEAVY INDUSTRIES" },
    { icon: Icon7, title: "PHARMACEUTICAL" },
    { icon: Icon8, title: "REAL ESTATE" },
    { icon: Icon9, title: "AUTOMOTIVE" },
    { icon: Icon10, title: "ELECTRONICS" },
  ];
  return (
    <section className="my-5 container text-center border border-dark rounded">
      <div className="p-2 p-lg-4 border-bottom border-dark">
        <h2 className="mb-4">
          <span className="border-3 border-primary border-bottom">Industries</span> we work with
        </h2>
        <p className="fs-5">
          We work with following Industries and More. Anyone who needs a Game or Metaverse developed, our Experts will
          be always ready to help
        </p>
      </div>
      <div className="row p-2 p-lg-4">
        {industries.map((f,i) => (
          <div key={i} className="col-6 col-20 px-3">
            <img src={f.icon.src} height="150" />
            <h5>{f.title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutIndustries;
