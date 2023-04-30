import React from "react";
import Bg1 from "../../public/images/why us/SolutionWhyUsBg1.png";
import Bg2 from "../../public/images/why us/SolutionWhyUsBg2.png";
import Bg3 from "../../public/images/why us/SolutionWhyUsBg3.png";
import Bg4 from "../../public/images/why us/SolutionWhyUsBg4.png";
import Bg5 from "../../public/images/why us/SolutionWhyUsBg5.png";
import Bg6 from "../../public/images/why us/SolutionWhyUsBg6.png";
import Icon1 from "../../public/images/why us/SolutionWhyUsIcon1.png";
import Icon2 from "../../public/images/why us/SolutionWhyUsIcon2.png";
import Icon3 from "../../public/images/why us/SolutionWhyUsIcon3.png";
import Icon4 from "../../public/images/why us/SolutionWhyUsIcon4.png";
import Icon5 from "../../public/images/why us/SolutionWhyUsIcon5.png";
import Icon6 from "../../public/images/why us/SolutionWhyUsIcon6.png";

const SolutionWhyUs = () => {
  const reasons = [
    { icon: Icon1, bg: Bg1, title: "Multiplayer Gaming" },
    { icon: Icon2, bg: Bg2, title: "Seamless gaming experience" },
    { icon: Icon3, bg: Bg3, title: "Expert 2D and 3D Game Designers" },
    { icon: Icon4, bg: Bg4, title: "Supports Cross Platform Compatibility" },
    { icon: Icon5, bg: Bg5, title: "Attractive Interface and User Experience" },
    { icon: Icon6, bg: Bg6, title: "Expert Real Money Game Developers" },
  ];

  return (
    <section className="py-5 my-5 container text-center">
      <h2 className="mb-4">
        Why <span className="border-3 border-primary border-bottom">Bleeding Edge</span> is the best game development
        company?
      </h2>
      <p className="fs-5">
        Bleedign Edge Studio is a leading Game development company. We have a team of dedicated developers who ensure to
        meet all your requirements and needs to deliver to you the best possible game. We have developed tons of games
        and therefore with our expertise, we will develop the perfect real game with all the latest features and
        functionality. Our developers use the latest technology to develop the most advanced game that is user-friendly.
        Here are some of the advantages of choosing Bleeding Edge Studio
      </p>

      <div className="row">
        {reasons.map((r,i) => (
          <div key={i} className="col-6 col-md-4 col-xl-2 p-3">
            <div
              className="d-flex flex-column align-items-center justify-content-center gap-3 border border-dark px-2"
              style={{
                backgroundImage: `linear-gradient(0, rgba(0,0,0,.7) 0%, rgba(0,0,0,.7) 100%), url(${r.bg.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "0 4rem 0 4rem",
                minHeight: "50vmin",
              }}
            >
              <img src={r.icon.src} />
              <h6>{r.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionWhyUs;
