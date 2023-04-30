import React from "react";
import Image1 from "../../public/images/about/AboutCard1.png";
import Image2 from "../../public/images/about/AboutCard2.png";
import Image3 from "../../public/images/about/AboutCard3.png";
const AboutCards = () => {
  const cards = [
    {
      image: Image1,
      title: "Our Vision",
      desc: "Our vision is to become a Top 5 Games & Metaverse Company in the world and develop games & apps that touches more than 1 billion lives!",
    },
    {
      image: Image2,
      title: "Our Philosophy",
      desc: "Our Philosophy is to innovate every single day and always think in client shoes . Integrity, Dependability and Capability are keys to business relationship – in that order!",
    },
    {
      image: Image3,
      title: "Our Story",
      desc: "We started way back in 2016 with 2 Persons and one small office and have grown to 200+ Team members in different parts of the world working on things like Android/Ios Game development and futuristic technologies like Metaverse and NFTs.",
    },
  ];
  return (
    <section className="py-5 my-5 container">
      <div className="row">
        {cards.map((c, i) => (
          <div key={i} className="col-12 col-lg-4 p-4">
            <div className="border border-dark rounded">
              <img src={c.image.src} className="w-100 rounded-top" />
              <div className="p-3">
                <h5>{c.title}</h5>
                <p className="m-0">{c.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutCards;
