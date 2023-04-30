import React from "react";

import Icon1 from "../../public/images/chess/ChessFeatureIcon1.png";
import Icon2 from "../../public/images/chess/ChessFeatureIcon2.png";
import Icon3 from "../../public/images/chess/ChessFeatureIcon3.png";
import Icon4 from "../../public/images/chess/ChessFeatureIcon4.png";
import Icon5 from "../../public/images/chess/ChessFeatureIcon5.png";
import Icon6 from "../../public/images/chess/ChessFeatureIcon6.png";

const AboutValues = () => {
  const values = [
    {
      icon: Icon1,
      title: "Creativity",
      desc: "Striving to bring imagination, original ideas, and excitement to everything we do",
    },
    {
      icon: Icon2,
      title: "Pioneering",
      desc: "Acting with the curiosity and courage that it takes to experimetn, innovate’ and lead",
    },
    { icon: Icon3, title: "Passion", desc: "We are at our best when we pursue what we love, and have fun doing it" },
    {
      icon: Icon4,
      title: "Determination",
      desc: "Bringing focus, drive and conviction to our actions. Thriving on the journey, and being motivated  to achieve excellence",
    },
    {
      icon: Icon5,
      title: "Learning",
      desc: "Listening, having humility being open to new ways of thinking, and looking with a lens of inclusion. Challenging ourselves to grow and change as a company",
    },
    {
      icon: Icon6,
      title: "Teamwork",
      desc: "Committed to each other, and to the accountability and integrity it takes to be a sucessful diverse team",
    },
  ];
  return (
    <section className="py-5 my-5 container text-center">
      <h2 className="mb-4">
        Bleeding Edge Studio <span className="border-3 border-primary border-bottom">Values</span>
      </h2>
      <p className="fs-5">
        These core values are the essential and enduring tenets of Bleeding Edge Studio . These are timeless guidelines
        and require no external justification. They are of intrinsic value and importance to Bleeding Edge Studio and
        its members.
      </p>
      <div className="row ">
        {values.map((v,i) => (
          <div key={i} className="col-6 col-lg-4 p-2 p-lg-4 ">
            <div className="border border-dark rounded p-3 p-lg-4 h-100 glass">
              <img src={v.icon.src} height="150" />
              <h5>{v.title}</h5>
              <p>{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutValues;
