import React from "react";

import Icon1 from "../../public/images/infrastructure/InfrastructureCard1.png";
import Icon2 from "../../public/images/infrastructure/InfrastructureCard2.png";
import Icon3 from "../../public/images/infrastructure/InfrastructureCard3.png";
import Icon4 from "../../public/images/infrastructure/InfrastructureCard4.png";
import Icon5 from "../../public/images/infrastructure/InfrastructureCard5.png";
import Icon6 from "../../public/images/infrastructure/InfrastructureCard6.png";

const InfrastructureCards = () => {
  const cards = [
    {
      icon: Icon1,
      title: "CUSTOMIZED DEMAND  SOLUTIONS",
      desc: "Custom game development is designing, developing, scaling, integrating, and upgrading solutions to meet the demands and needs of your business. Bleeding Edge has all the tools you need to develop the most valuable games with very advanced features. We can meet the requirements of companies of all sizes like small startups, midsize, or enterprise-level companies. Whether your game is for managing B2B, B2C interactions, on-demand solutions, internal operations, gaming apps, etc., we can tailor an app solution to your needs.",
    },
    {
      icon: Icon2,
      title: "SERVER MANAGEMENT",
      desc: "Servers are used for performance and data storage. However, managing and maintaining your server is very important if it is critical to your game's performance. We will take care of the technical aspects of your app. Bleeding Edge is good at maintaining your business processes and everything related to your games, and maintaining and managing your servers is one such task.",
    },
    {
      icon: Icon3,
      title: "ACCOMPANIMENT DATA BACKUP FACILITY",
      desc: "The app's user experience relies on backing up data. Users spend considerable time and effort creating identities, adding data, and customizing app settings and settings. A wise person has a backup plan, and an equally wise developer can back up their data. The backup feature allows users to enjoy a personalized experience across different devices. Bleeding Edge handles data backup for all the products we develop, so all our clients can trust their games to store their data. Bleeding Edge ensures regular data backups to prevent accidental loss of information and databases.",
    },
    {
      icon: Icon4,
      title: "PROJECT MAINTENANCE",
      desc: "Bleeding Edge has the latest technology so that you can keep all versions of your files, existing or outdated. You can get all files from your company. If there is a problem with the new file, at least a backup of the old file is created. You can reference old files, so you do not have to start from scratch. All data is systematically stored on the company's servers, so you can get what you need in seconds.",
    },
    {
      icon: Icon5,
      title: "PRIORITY CHECK AND DATA BACKUP",
      desc: "Bleeding Edge servers can provide offsite backup in the event of a disaster. The company maintains priority data checks and backups of game data. All data that enters the server is first checked and then saved. As a company, we understand the importance and power of data in the world of technology. So you do not need to worry about checking up and backing up your data.",
    },
  ];
  return (
    <section className="py-5 my-5 container">
      <h2 className="mb-4 text-center">
        Our <span className="border-3 border-primary border-bottom">Conducive</span> process to fuel your business
        growth!
      </h2>
      <p className="fs-5 text-center">
        Bleeding Edge motive is to provide the most extraordinary app and game solutions to help clients achieve their
        goals easily and nurture their businesses. To ensure that we create the most refined and effective solution, we
        follow this curated development process:
      </p>

      <div className="row justify-content-between shift-down-2 pt-5">
        {cards.map((c, index) => (
          <div key={index} className={`col-12 col-lg-6 pb-3 ${index % 2 ? "shift-down-2 pad-left" : "shift-up-2 pad-right"}`}>
            <div className="border border-dark border-2 rounded-4 glass">
              <div className="d-flex align-items-center pe-3">
                <img src={c.icon.src} style={{ width: "100px" }} />
                <div>
                  <h5>{c.title}</h5>
                </div>
              </div>
              <div className="px-3">
                <p>{c.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfrastructureCards;
