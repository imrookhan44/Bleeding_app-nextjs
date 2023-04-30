import React, { Children } from "react";

import Icon1 from "../../public/images/service/WhyUsIcon1.png";
import Icon2 from "../../public/images/service/WhyUsIcon2.png";
import Icon3 from "../../public/images/service/WhyUsIcon3.png";
import Icon4 from "../../public/images/service/WhyUsIcon4.png";
import Icon5 from "../../public/images/service/WhyUsIcon5.png";
import Icon6 from "../../public/images/service/WhyUsIcon6.png";

const ServiceWhyUs = ({ title }) => {
  const reasons = [
    {
      icon: Icon1,
      title: "Highly Skilled Developers",
      desc: `Here at Bleeding Edge, we have a cohesive group of people who are acutely passionate about games and our developers are the top of the crop. With years of experience and successful ${
        title || "Android games already on the Play Store"
      }, our developers know what succeeds and they try their best to acheive that for you`,
    },
    {
      icon: Icon2,
      title: "Rich Design",
      desc: "Our creative designers use their imagination to keep extending their own potential to create beautiful virtual worlds and characters to tell the story you want to share. A game’s success heavily depends on its smooth operability and lush graphics. A fact our designers perfectly understand",
    },
    {
      icon: Icon3,
      title: "Grand Performance",
      desc: `With our vast experience in ${
        title || "Android Game Development"
      }, we understand that it is the best platform to create and publish fast paced games thus the need to create less memory consuming and high performance game app.`,
    },
    {
      icon: Icon4,
      title: "Latest Technology",
      desc: "We are well versed in the latest technologies that will keep your game modern and up to the standards.",
    },
    {
      icon: Icon5,
      title: "Customer Support",
      desc: "Bleeding Edge delivers fast, 24/7 support and maintenance for clients who are in need of help even after the development process is over",
    },
    {
      icon: Icon6,
      title: "Competitive Prices",
      desc: "We provide the best prices that are market competitive and friendly on your budget.",
    },
  ];

  return (
    <section>
      <h4 className="text-center my-5">Why Choose Bleeding Edge for {title}</h4>
      <div className="d-block d-lg-none">
        {reasons.map((r, i) => (
          <div key={i} className="d-flex mb-3">
            <div
              className={`col-11 p-3 border ${
                i % 2
                  ? "bg-blue border-blue"
                  : "bg-primary-10 border-primary-light ms-auto"
              } rounded-5`}
            >
              <div className={`${i % 2 ? "text-start" : "text-end"}`}>
                <h1 className="display-1">
                  0{i + 1} <img src={r.icon.src} height="50rem" />
                </h1>
                <h5>{r.title}</h5>
                <p className="m-0">{r.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-none d-lg-block">
        {reasons.map((r, i) =>
          i % 2 ? (
            <div key={i} className="d-flex justify-content-start mb-3">
              <div
                className="d-flex align-items-center gap-4 col-11 col-lg-8 pe-5 p-3 border bg-blue border-blue border-start-0"
                style={{ borderRadius: "0 50rem 50rem 0" }}
              >
                <div className="col text-center">
                  <img src={r.icon.src} height="70rem" />
                </div>
                <div className="col-7">
                  <h5>{r.title}</h5>
                  <p className="m-0">{r.desc}</p>
                </div>
                <h1 className="display-1">0{i + 1}</h1>
              </div>
            </div>
          ) : (
            <div key={i} className="d-flex justify-content-end mb-3">
              <div
                className="d-flex align-items-center gap-4 col-11 col-lg-8 ps-5 p-3 border bg-primary-10 border-primary-light border-end-0"
                style={{ borderRadius: "50rem 0 0 50rem" }}
              >
                <h1 className="display-1">0{i + 1}</h1>
                <div className="col-7">
                  <h5>{r.title}</h5>
                  <p className="m-0">{r.desc}</p>
                </div>
                <div className="col text-center">
                  <img src={r.icon.src} height="70rem" />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default ServiceWhyUs;
