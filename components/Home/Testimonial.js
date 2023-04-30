import React, { useEffect } from "react";
import flickityInit from "../../utils/flickityInit";
import MaleAvatar from "../../public/images/male.png";
import FemaleAvatar from "../../public/images/female.png";
import Quote from "../../public/images/Quote.svg";

const Testimonial = () => {
  useEffect(() => {
    flickityInit("review-carousel", {
      freeScroll: false,
      prevNextButtons: true,
      adaptiveHeight: true,
    });
  });
  const reviews = [
    {
      image: FemaleAvatar,
      name: "Vanessa Haines",
      message:
        "The team stood out for their quick response times and patience. Bleeding Edge provided a single point of contact and helped streamline project management and coordination. Good Job!",
    },

    {
      image: MaleAvatar,
      name: "William Noland",
      message:
        "Bleeding Edge has hired incredible developers. I was genuinely impressed with their work standard and assistance in achieving my goals. I will definitely work with them in the future.",
    },

    {
      image: MaleAvatar,
      name: "Patrick Schofield",
      message:
        "Bleeding edge has exceptional development services integrated with the latest digital technologies to enhance user experience. They not only followed our budget and timeline but provided us with seamless service at an affordable price.",
    },

    {
      image: FemaleAvatar,
      name: "Jamie Stevens",
      message:
        "Big thanks! The end product was beautifully designed, simple and elegant. It was just what I was hoping for, only better.",
    },

    {
      image: MaleAvatar,
      name: "Jerry Nathan",
      message:
        "Bleeding Edge did a great job and met all my expectations. My game idea turned out to be more difficult than I initially thought, but they completed my project on time and within budget. They have highly experienced game developers with solid skills. I would work with them again any day. Thank you for a job well done.",
    },

    {
      image: MaleAvatar,
      name: "Richard Allen",
      message:
        "I really enjoyed working with the Bleeding Edge team. They did not just provide a service. They worked with me to make my app the best it could be. I would not be hesitant to work with them again and hope to do so in the future!",
    },

    {
      image: MaleAvatar,
      name: "David Makela",
      message:
        "With their dedicated and innovative team, they always found solutions to the problems/flaws we faced and fixed them accordingly. They ensured transparency, kept track of their work, and responded quickly to emails and text messages, which gave me confidence.",
    },

    {
      image: MaleAvatar,
      name: "Arthur Bradley",
      message:
        "They worked hard to stay on schedule, quoted excellent prices, and stuck to them. We believe their success is inextricably linked to their unique expertise and competence and the organization's commitment to operating with integrity. You are in the right place to seek the best game development services.",
    },

    {
      image: FemaleAvatar,
      name: "Earl Sanborn",
      message:
        "The developers at Bleeding Edge provided valuable initial feedback on the app's potential success and allowed us to interact directly with developers who displayed the same courteous and professional demeanor. Highly recommended!",
    },

    {
      image: FemaleAvatar,
      name: "Elaine Richard",
      message:
        "Bleeding Edge brought my game idea to life, just as I had envisioned it. Your dedication, hard work, flexibility, perseverance, and professionalism will be recognized and appreciated.",
    },
  ];
  return (
    <section className="container">
      <h2 className="text-center">
        What our{" "}
        <span className="border-3 border-primary border-bottom">clients</span>{" "}
        say
      </h2>
      <p className="fs-5 my-4 text-center">
        We are very fortunate to have formed excellent partnerships with many of
        our clients. And we’ve developed more than just professional
        relationships with them. Here is what they are saying about us.
      </p>
      <div className="rounded-testimonial py-5 px-3 px-lg-5 border border-2 border-primary-light d-flex flex-column bg-primary-4">
        <h3 className="text-center mb-4">Our community with User reviews</h3>
        <div id="review-carousel">
          {reviews.map((r, index) => (
            <div key={index} className="carousel-cell">
              <div className="rounded-testimonial p-2 p-lg-5 col-11 col-lg-10 border border-2 border-primary-light mx-auto mb-5 bg-primary-10">
                <div className="container d-flex flex-column flex-lg-row align-items-center gap-5">
                  <img
                    src={r.image.src}
                    height="150"
                    className="border border-4 border-primary rounded-circle"
                  />
                  <div className="ms-auto col-12 col-lg-8 position-relative">
                    <img
                      src={Quote.src}
                      style={{ width: "8vmax", left: "-2vmax" }}
                      className="position-absolute translate-middle-y"
                    />
                    <p className="fs-5 position-relative">{r.message}</p>
                    <p>
                      <em>
                        - {r.name}, {r.company}
                      </em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
