import React from "react";

import Icon1 from "../../public/images/infrastructure/InfrastructureTab1.png";
import Icon2 from "../../public/images/infrastructure/InfrastructureTab2.png";
import Icon3 from "../../public/images/infrastructure/InfrastructureTab3.png";

const InfrastructureTabs = () => {
  const tabs = [
    { icon: Icon1, title: "Best Tools", desc: "Looking to bring your high-quality Scalable apps in real life." },
    {
      icon: Icon2,
      title: "Experienced Team",
      desc: "Reimagine your business with our Mobile App Development Services.",
    },
    {
      icon: Icon3,
      title: "Multiple Platforms",
      desc: "Building custom solutions across Android, iOS, and Native platforms.",
    },
  ];
  return (
    <section className="pt-5 mt-5 container">
      <div className="row">
        {tabs.map((t,i) => (
          <div key={i} className="col-12 col-lg-4 px-4 d-flex">
            <img src={t.icon.src} height="150" style={{ margin: "-20px" }} />
            <div>
              <h5>{t.title}</h5>
              <p>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfrastructureTabs;
