import React from "react";
import ProcessIcon1 from "../../public/images/process/ProcessIcon1.png";
import ProcessIcon2 from "../../public/images/process/ProcessIcon2.png";
import ProcessIcon3 from "../../public/images/process/ProcessIcon3.png";
import ProcessIcon4 from "../../public/images/process/ProcessIcon4.png";
import ProcessIcon5 from "../../public/images/process/ProcessIcon5.png";
import ProcessIcon6 from "../../public/images/process/ProcessIcon6.png";

const ProcessSteps = () => {
  const steps = [
    {
      icon: ProcessIcon1,
      title: "Discovery",
      desc: "It is the first step where an idea turns into a game. First, during the discovery phase, we identify the game's scope and what we need on the release date. The discovery phase typically lasts one to two months, depending on the project's scope, required resources, and available budget. The discovery phase is a crucial starting point for game creation and typically implies a range of activities like Game design document creation, art-style definition, technology stack definition, and project planning. ",
      list: [
        "Requirement Analysis",
        "Features Enhancement",
        "Competitor Analysis",
        "Tech Stack",
        "Product Roadmap",
        "Approx Product Estimation",
      ],
    },
    {
      icon: ProcessIcon2,
      title: "Production",
      desc: "This is where full-scale development begins. Team members polish the story and define game mechanics, balance, pacing, and gameplay. Then create all the assets like characters, creatures, props, and environments, set the rules of play, build the levels and scenes, and write the code. Each game component must be carefully designed for enjoyment and gameplay, as well as characters, environments, objects, difficulty levels, and scenes. The game continues to be tested and improved even after it is released because the first ideas do not always work out in real life.",
      list: [],
    },

    {
      icon: ProcessIcon3,
      title: "Testing",
      desc: "All in-game features and mechanics require testing for quality control. A game that has not been comprehensively tested is a game that is not even ready for an alpha release. After many iterations of testing, the game should be ready for an alpha or beta release, counting on how polished the in-game features are. At this stage, the player experiences the game for the first time.",
      list: [],
    },

    {
      icon: ProcessIcon4,
      title: "Release",
      desc: "With a release date approaching, we know the light is at the end of the tunnel. The time leading up to the planned date is typically spent debugging errors found during the testing phase. In addition to fixing bugs, our developers focus on games as much as possible before release. That rock may have more depth. Perhaps a character's outfit could be more textured, or those trees could end up swaying in the wind. Once the game is squeaky clean, it is ready to be published and distributed.",
      list: [],
    },

    {
      icon: ProcessIcon5,
      title: "After release",
      desc: "After the game is released, the development process continues with team members responsible for fixing bugs, patches, bonuses, in-game events, or creating new downloadable content. It is common for video games to launch with a batch of minor bugs. Our developers will identify and eliminate these bugs during the first few months after launch. Bleeding Edge also relies on players submitting bug reports and discussing bugs in online forums. This is all part of post-release maintenance.",
      list: [],
    },
  ];

  return (
    <section className="py-5 my-5 container">
      <h2 className="mb-4 text-center">
        Our{" "}
        <span className="border-3 border-primary border-bottom">Conducive</span>{" "}
        process to fuel your business growth!
      </h2>
      <p className="fs-5 text-center">
        Bleeding Edge motive is to provide the most extraordinary app and game
        solutions to help clients achieve their goals easily and nurture their
        businesses. To ensure that we create the most refined and effective
        solution, we follow this curated development process:
      </p>

      <div className="row justify-content-between shift-down-2 pt-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`col-12 col-lg-6 pb-3 ${
              index % 2 ? "shift-down-2 pad-left" : "shift-up-2 pad-right"
            }`}
          >
            <div className="border border-dark border-2 rounded-4 glass">
              <div className="d-flex align-items-center pe-3">
                <img src={step.icon.src} style={{ width: "100px" }} />
                <div>
                  <h5 className="text-primary m-0">Step {index + 1}</h5>
                  <h5>{step.title}</h5>
                </div>
              </div>
              <div className="px-3">
                <p className="">{step.desc}</p>
                <ul className="d-flex flex-wrap">
                  {step.list.map((item, i) => (
                    <li key={i} className="col-6">
                      {item}
                    </li>
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

export default ProcessSteps;
