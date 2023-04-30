import React from "react";
import WorkImage1 from "../../public/images/work/OurWorkGame1.jpg";
import WorkImage2 from "../../public/images/work/OurWorkGame2.jpg";
import WorkImage3 from "../../public/images/work/OurWorkGame3.jpg";
import WorkImage4 from "../../public/images/work/OurWorkGame4.jpg";
import WorkImage5 from "../../public/images/work/OurWorkGame5.jpg";
import WorkImage6 from "../../public/images/work/OurWorkGame6.jpg";

const WorkCards = () => {
  const cards = [
    {
      image: WorkImage1,
      title: "Coach Bus Simulator Parking",
      desc: "Are you ready to drive coach bus on bumpy roads? Play the most realis- tic Coach Bus simulator game. Drive carefully by avoid the accident and show your Coach bus driving skills.",
      link: "https://play.google.com/store/apps/details?id=com.bleedingedge.bussimulator.proparking",
    },

    {
      image: WorkImage2,
      title: "Americana Heroz",
      desc: "Want to become Americana Hero? Welcome to our world of amazing ldventures with AR & VR!",
      link: "https://apps.apple.com/sa/app/americana-heroz/id1584395100",
    },

    {
      image: WorkImage3,
      title: "Barber Shop Sim Hair Cut",
      desc: "Play as Arabian Hairdresser in barber shop haircut games! Try it at least once. Spice up your hair styles with barber shop hair cutting games for boys!",
      link: "https://apps.apple.com/sa/app/barber-shop-sim-hair-cut-games/id1616176944",
    },

    {
      image: WorkImage4,
      title: "Hit & Toss Knock Down 3D",
      desc: "Do you want to become king of knockdown the target? Do you have passion of playing shooting range games? If yes, then play our Knock Down 3D & hit the targets like drums.",
      link: "https://apps.apple.com/us/app/hit-toss-knock-down-3d/id1441631259",
    },

    {
      image: WorkImage5,
      title: "Mini Cartoon Car Racing Legend",
      desc: "Are you looking for Mini cartoon type racing adventures game with multiple of racing & time missions on the impossible track? If yes, then play our Mini Cartoon Car Racing.",
      link: "https://apps.apple.com/us/app/mini-cartoon-cars-drift-racer/id1448238379",
    },

    {
      image: WorkImage6,
      title: "Roller Coaster",
      desc: "Ready to experience the real adventure of Epic Roller Coaster with a new feature of bat shooting? Indulge in one of the most refined, im- mersive and energetic VR coasters you’ve ever seen!",
      link: "https://www.oculus.com/experiences/go/2751826864934523",
    },
  ];
  return (
    <section className="container">
      <h1 className="text-center mb-4">
        Our <span className="text-primary">Work</span>
      </h1>
      <div className="row ">
        {cards.map((c,i) => (
          <div key={i} className="col-12 col-lg-4 mb-4">
            <div className="rounded border border-dark p-4">
              <img src={c.image.src} className="w-100 mb-4 rounded-4" />
              <h5>{c.title}</h5>
              <p>{c.desc}</p>
              <a href={c.link} target="_blank" className="btn btn-primary text-white px-3">
                DOWNLOAD
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkCards;
