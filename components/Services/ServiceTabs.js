import React from "react";
import Icon1 from "../../public/images/service/ServiceIcon1.png";
import Icon2 from "../../public/images/service/ServiceIcon2.png";
import Icon3 from "../../public/images/service/ServiceIcon3.png";
import Icon4 from "../../public/images/service/ServiceIcon4.png";

const ServiceTabs = () => {
  const services = [
    {
      icon: Icon1,
      title: "Mobile Game Art, Design & Animation",
      desc: "The only question that truly matters here is, what makes art 'sticky?' Character design? Costumes? The symbols and micro details that make each frame a masterpiece? We say, all of it. Our art designers focus on three key performance indicators:",
      list: [
        "Building worlds that capture magnitude, scale, and entertainment",
        "Directing art for mobile games that stand out in the Google Play Store and App Store",
        "Capturing the full extent of the user's imagination with graphics, immersive design systems, and multi-dimensionality",
      ],
    },
    {
      icon: Icon2,
      title: "UI/UX Logic Design & Execution",
      desc: "The only question that truly matters here is, what makes art 'sticky?' Character design? Costumes? The symbols and micro details that make each frame a masterpiece? We say, all of it. Our art designers focus on three key performance indicators:",
      list: [
        "Building worlds that capture magnitude, scale, and entertainment",
        "Directing art for mobile games that stand out in the Google Play Store and App Store",
        "Capturing the full extent of the user's imagination with graphics, immersive design systems, and multi-dimensionality",
      ],
    },
    {
      icon: Icon3,
      title: "Full-cycle Game Development",
      desc: "",
      list: [
        "We have experience taking native and cross-platform from idea to production for Startups to Fortune 500 brands across the world. Our tech stack includes game development engines like Unity, Unreal, Cocos2d, and HTML5-JS frameworks like Playcanvas, Phaser, Pixi, amongst others to support mobile browsers. Based on the business and concept objectives of each game, our team of mobile game developers identifies specific tools and technologies to use and bring your ideas to life.",
        "We merge creative vision, technological competence, and project management capabilities to ensure client satisfaction and user delight.",
      ],
    },
    {
      icon: Icon4,
      title: "Mobile Game Testing",
      desc: "",
      list: [
        "Our QA & QC teams for iOS and Android mobile games have worked with over 500+ projects of different scales. We evaluate the game's performance, playability, device compatibility, user interface, user experience, screen orientations, resolutions, load testing, and social integration, among other things",
        "Our Mobile Game testing division and Quality Assurance teams work on agile flows with our development team to ensure that our team identify root problems, test, and integrate them into one flowing circle. This collaborative approach makes the Juego team's mobile game testing division to be at the forefront of industry standards and innovative practices.",
      ],
    },
  ];
  const radius = ["50px 0 0 0", "0 50px 0 0", "0 0 0 50px", "0 0 50px 0"];
  return (
    <section className="container mt-5">
      <div className="row">
        {services.map((s, i) => (
          <div key={i} className="col-12 col-lg-6 p-3">
            <div className={`gradient-border ${i % 2 ? "shift-down" : "shift-up"}`} style={{ borderRadius: radius[i] }}>
              <div className="p-4">
                <div className="d-flex mb-3">
                  <img src={s.icon.src} className="me-3" />
                  <h2>{s.title}</h2>
                </div>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate distinctio eaque natus nisi totam
                  commodi inventore suscipit, pariatur obcaecati omnis. Sequi vel quisquam consequatur assumenda ad
                  consequuntur, quaerat rerum excepturi.
                </p>
                <ul className="list-unstyled mt-3">
                  {s.list.map((l,index) => (
                    <li key={index}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceTabs;
