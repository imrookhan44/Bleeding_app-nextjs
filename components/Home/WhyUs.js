import React from "react";
import Icon1 from "../../public/images/home/WhyUs1.png";
import Icon2 from "../../public/images/home/WhyUs2.png";
import Icon3 from "../../public/images/home/WhyUs3.png";

const WhyUs = () => {
  const reasons = [
    {
      icon: Icon1,
      title: "Transcendent business value",
      desc: "With unparalleled offshore game development services, our crackerjacks tread the globe, listen to ideas, process them and evaluate users' exact requirements. The apps we create to change the outlook for customer satisfaction and experience.",
    },
    {
      icon: Icon2,
      title: "Experiences beyond devices",
      desc: "Our game development specialists come together to suit your requirements and embellish them with customized technology. Create games that take your brand to the next level of personalization. ",
    },
    {
      icon: Icon3,
      title: "Features that speak for itself",
      desc: "We infuse our games with unique features and set unrivaled standards. Having a gaming app with powerful path-breaking capabilities will make your brand stand out from the crowd. As a capable enterprise, we have seasoned professionals who will take your dreams into space reality. Our unique game development team is well versed in the latest trends in the gaming world to deliver a seamless experience and help power your business.",
    },
    {
      icon: Icon1,
      title: "Rolling to new features",
      desc: "Our foresight and futuristic understanding of next-generation technologies save gaming apps from inevitable change. Our game development services deliver novel rolling experiences through AR and VR and pre-market imagery based on the latest technology stacks.",
    },
    {
      icon: Icon2,
      title: "The professionals beyond experience",
      desc: "The word expert comes from experience, and our experts justify the term because they are top-notch talent. With years of experience in game development services, we ensure to deliver superior gaming application development services to boost your existing business. Front-end and back-end developers partner with UI/UX designers to deliver a proficient final product tested at each step of our mobile application development services.",
    },
    {
      icon: Icon3,
      title: "Rolling to new features",
      desc: "Our foresight and futuristic understanding of next-generation technologies save gaming apps from inevitable change. Our game development services deliver novel rolling experiences through AR and VR and pre-market imagery based on the latest technology stacks.",
    },
  ];
  return (
    <section className="container text-center my-5 pt-5">
      <h2>
        Why <span className="border-3 border-primary border-bottom">Choose</span> to Work With Us
      </h2>
      <p className="fs-5 my-4">
        Bleeding Edge Studio, a game studio, takes pride in having solid experience of many years in providing game and
        app development services to clients in the USA, UK, UAE, India, and other parts of the world. Our standards are
        on par with the top game and app development companies and technology ventures in the industry today.
      </p>
      <div className="row text-start">
        {reasons.map((r,index) => (
          <div key={index} className="col-12 col-lg-4 mb-3">
            <div
              className="gradient-border mb-3 h-100"
              style={{
                borderRadius: "var(--bs-border-radius-lg) 40px var(--bs-border-radius-lg) 40px",
              }}
            >
              <div className="p-3 h-100">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <img src={r.icon?.src} />
                  <h4>{r.title}</h4>
                </div>
                <p>{r.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
