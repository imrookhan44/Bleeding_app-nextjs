import React from "react";
import Icon1 from "../../public/images/solution/SolutionStep1.png";
import Icon2 from "../../public/images/solution/SolutionStep2.png";
import Icon3 from "../../public/images/solution/SolutionStep3.png";
import Icon4 from "../../public/images/solution/SolutionStep4.png";

const SolutionSteps = ({ title }) => {
  const steps = [
    { icon: Icon1, title: "Discuss", desc: "Discuss the end-requirements of the projects" },
    { icon: Icon2, title: "Define", desc: "Define Breakthrough and Specify the Scope" },
    { icon: Icon3, title: "Sign", desc: "Sign a legal document" },
    { icon: Icon4, title: "Start", desc: "Kick-start the project" },
  ];

  return (
    <section className="py-5 my-5 container text-center">
      <h2 className="mb-4">
        How to kick <span className="border-3 border-primary border-bottom">Start</span> a {title} project?
      </h2>
      <p className="fs-5">You are just simple four steps away to kick start your dream project with us</p>
      <div className="row">
        {steps.map((s,i) => (
          <div key={i} className="col-6 col-lg-3">
            <img src={s.icon.src} className="me-4" />
            <h5 className="ms-2 mb-0">{s.title}</h5>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionSteps;
