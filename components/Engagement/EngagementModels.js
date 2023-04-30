import React from "react";
import Number1 from "../../public/images/numbers/01.svg";
import Number2 from "../../public/images/numbers/02.svg";
import Number3 from "../../public/images/numbers/03.svg";
import EngagementIcon1 from "../../public/images/engagement/EngagementIcon1.png";
import EngagementIcon2 from "../../public/images/engagement/EngagementIcon2.png";
import EngagementIcon3 from "../../public/images/engagement/EngagementIcon3.png";

const EngagementModels = () => {
  const models = [
    {
      number: Number1,
      icon: EngagementIcon1,
      title: "Hire a Developer <br/> Model",
      desc: "Bleeding Edge works with hourly, part-time, and full-time pricing models to keep you in control and satisfied. We are dedicated to meeting deadlines and following a material model that allows our clients to complete their projects on time. Our advanced technical expertise allows us to promptly deliver complex and interactive gaming apps. Some game development projects are complex and challenging to define scope and business requirements. In this case, this model is best for you and gives you the most control and flexibility compared to the fixed-fee engagement model.",
    },
    {
      number: Number2,
      icon: EngagementIcon2,
      title: "Fixed Cost <br/> Development Model",
      desc: "Our mission is to provide perfect and accurate solutions within the stipulated time. We set the right priorities and strive to balance customer requirements, worthwhile ideas, and documentation in terms of time and money. Clients can pay the agreed price, deliver the project on time and get the desired result. Here the client needs to discuss the exact development requirements with the team to fix the total project cost, delivery date, and features. Bleeding Edge requires detailed documentation covering the project plan with requirements and pre-planned ideas. With them, you can move forward with unparalleled design and development solutions. This is a model that turns well-defined requirements into well-defined deliverables.",
    },
    {
      number: Number3,
      icon: EngagementIcon3,
      title: "Dedicated Material <br/> Development Model",
      desc: "Bleeding Edge provides dedicated developers as per business requirements. This approach helps our clients get the best output and results in the long run. Most clients choose this engagement model because it is cost-effective, provides incredible flexibility, oversees hired resources, and tracks the development process. This engagement model is ideal for ongoing engagement, changing requirements, time management, and material development.",
    },
  ];
  return (
    <section className="container mt-5  pt-5 pt-lg-0">
      <div className="text-center">
        <h2 className="mb-4">
          Bleeding Edge{" "}
          <span className="border-3 border-primary border-bottom">
            Engagement Models
          </span>
        </h2>
        <p className="fs-5 mb-5 pb-5">
          Bleeding Edge offers three solution development models as a perfect
          partner for game development. Even if your goal or steps for your game
          app are not clear, we can help.
        </p>
      </div>

      {models.map((m, i) => (
        <>
          <div className="row align-items-center justify-content-center">
            <div
              className={`col-10 col-lg-6 text-center ${
                i % 2 ? "order-lg-2 text-lg-end" : ""
              }`}
            >
              <img src={m.icon.src} className="w-75" />
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex flex-lg-column gap-3">
                <img
                  src={m.number.src}
                  style={{ height: "10vmin" }}
                  className="me-lg-auto"
                />
                <h5
                  className="text-primary pb-2 my-auto"
                  dangerouslySetInnerHTML={{ __html: m.title }}
                ></h5>
              </div>
              <p>{m.desc}</p>
            </div>
          </div>
        </>
      ))}
    </section>
  );
};

export default EngagementModels;
