import React from "react";
import GameImage from "../../public/images/solution/SolutionGame.png";

const SolutionGames = () => {
  return (
    <section className="py-5 my-5 container">
      <h2 className="mb-4 text-center">
        Creating <span className="border-3 border-primary border-bottom">Digital</span> Products
      </h2>
      <p className="fs-5 text-center">
        With 7+ years of experience in developing various mobile games that range from complex to simple 2D games,
        Bleeding Edge has developed and launched numerous mobile games. Checkout our portfolio and have a glimpse of
        some of our excellent digital products.
      </p>
      <div className="row align-items-center light">
        <div className="col-12 col-lg-7 order-2 order-lg-1">
          <h1>Forward Thinking Game/Metaverse Development Company</h1>
          <p className="fs-5">
            Bleeding Edge is known for developing end-to-end mobile game development solutions. We focus on designing
            and developing mobile games for all popular devices and modernizing and transforming existing web-based
            games. We own a team of highly skilled designers and developers specializing in developing games for
            NFT/Web/Android/iOS mobile platforms. We develop visually rich and innovative games built to grow your
            business. Without integrity, transparency, expertise, and total commitment to their clients, long-term
            business relationships can only be built when partners. Bleeding Edge applies these principles to every
            contract and strives to be a reliable partner. What sets us apart from others is our end-to-end mobile game
            development, excellent track record in web/mobile game development for many platforms, high-profile
            short-term projects, providing game maintenance and upgrade support, access to true talent and gaming
            experts, and using the latest technology platforms to build scalable games.
          </p>
        </div>
        <div className="col-12 col-lg-5 text-center text-lg-end order-1 order-lg-2">
          <img src={GameImage.src} className="w-75" />
        </div>
      </div>
    </section>
  );
};

export default SolutionGames;
