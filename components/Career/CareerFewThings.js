import React from "react";
import Icon1 from "../../public/images/career/CareerFewThing1.png";
import Icon2 from "../../public/images/career/CareerFewThing2.png";
import Icon3 from "../../public/images/career/CareerFewThing3.png";
import Icon4 from "../../public/images/career/CareerFewThing4.png";

const CareerFewThings = () => {
  const things = [
    {
      icon: Icon1,
      title: "Collaboration",
      desc: "Use the most collaborative tools and mediums like Basecamp3, skype, video calls/meetings, etc. to complete innovative projects.",
    },
    {
      icon: Icon2,
      title: "Transparency",
      desc: "Our 100% work transparency is the key to ensure a positive company culture and solidifies employee loyalty and engagement.",
    },
    {
      icon: Icon3,
      title: "Trust",
      desc: "Our employees enjoy a culture of honesty, psychological safety, and mutual respect. It helps them to feel secure about their job, and feel motivated.",
    },
    {
      icon: Icon4,
      title: "Integrity",
      desc: "Bleeding Edge is the synonym of integrity as you will find honesty, loyalty, dependability, sound judgement, and trustworthiness in all our employees.",
    },
  ];
  return (
    <section className="py-5 my-5 container">
      <h1 className="mb-4 text-center">
        A few things you should know about us.
      </h1>
      <p className="fs-5 text-center">
        <span className="text-primary">Our values</span> We strive to redefine
        the standard of excellence
      </p>
      <div className="row light" style={{ backgroundSize: "100% 100%" }}>
        {things.map((t,index) => (
          <div key={index} className="col-12 col-md-6 col-lg-3 px-4">
            <img
              src={t.icon?.src}
              height="150"
              style={{ marginBottom: "-20px", marginLeft: "-15px" }}
            />
            <h5>{t.title}</h5>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerFewThings;
